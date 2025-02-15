/*
#
#  Created by Team HCL.
#  Copyright (c) 2018 HCL Software Inc. All rights reserved.
#
*/
define(function () {
    /**
     * @member of  VoltMXLogger.js
     * @function VoltMXLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, voltmx.print is called by default.
     * @returns an instance of VoltMXLogger class.
     * @description - This is the constructor for VoltMXLogger. 
     * This method initializes the instance created.
     **/
    var VoltMXLogger = function () {

        this.printMethod = voltmx.print;
        this.reuseableComponentName = arguments[0]|| "appContext";

        var loggerGenerator = function (){

            this.trace = function(message, event)
            {
                var caller;
                try
                {
                    caller = arguments.callee.caller.name;
                }
                catch(err)
                {
                    caller = "Global";
                }
                this.logMethod(caller,"TRACE",message,event);
            };

            this.debug = function(message, event)
            {
                var caller;
                try
                {
                    caller = arguments.callee.caller.name;
                }
                catch(err)
                {
                    caller = "Global";
                }
                this.logMethod(caller,"DEBUG",message,event);
            };

            this.info = function(message, event)
            {
                var caller;
                try
                {
                    caller = arguments.callee.caller.name;
                }
                catch(err)
                {
                    caller = "Global";
                }
                this.logMethod(caller,"INFO",message,event);
            };

            this.warn = function(message, event)
            {
                var caller;
                try
                {
                    caller = arguments.callee.caller.name;
                }
                catch(err)
                {
                    caller = "Global";
                }
                this.logMethod(caller,"WARN",message,event);
            };

            this.error = function(message, event)
            {
                var caller;
                try
                {
                    caller = arguments.callee.caller.name;
                }
                catch(err)
                {
                    caller = "Global";
                }
                this.logMethod(caller,"ERROR",message,event);
            };
        };

        this.setLogLevel = function(logLevel)
        {
            if(this.isValidLogLevel(logLevel)){
                if(typeof logLevel === "string"){
                    this.currentLogLevel = this.logLevels[logLevel];
                }
                else if(typeof logLevel === "number"){
                    this.currentLogLevel = logLevel;
                }

                var  logMethods = Object.keys(this.logLevels);

                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();

                    this[methodName] = (i < this.currentLogLevel) ?
                        function(){} :
                        (new loggerGenerator())[methodName];
                }

                return true;
            }
            else {
                return false;
            }
        };
		
      	this.enableServerLogging = false;
      	this.logMethod = function(functionName, logLevel, message, eventType){
          	var logObj = {
                "component": this.reuseableComponentName || "",
              	"event" : this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": VoltMXLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
          	if(this.enableServerLogging === true) {
              	if((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")){
                  	if(typeof KNYMetricsService.sendEvent === "function"){
                  		/** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                    	KNYMetricsService.sendEvent("Custom", "VoltMXLogger", "MarketPlaceComponent", logObj.component, null, logObj); 	
                    }
                }
            }
          	this.printMethod(JSON.stringify(logObj,null,'\t'));
        };
      	
        this.setLogLevel("TRACE");

    };

    /**
     * @member of  VoltMXLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    VoltMXLogger.prototype.logLevels = { 
        "TRACE" : 0, 
        "DEBUG" : 1, 
        "INFO" : 2, 
        "WARN" : 3,
        "ERROR" : 4, 
        "SILENT" : 5
    };
 
    /**
     * @member of  VoltMXLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    VoltMXLogger.prototype.supportedEventTypes = [
		"DEFAULT",
        "FUNCTION_ENTRY",
      	"FUNCTION_EXIT",
      	"SUCCESS_CALLBACK",
      	"ERROR_CALLBACK",
      	"EXCEPTION",
		"SERVICE_CALL",
		"DATA_STORE"
    ];
  	
  	/** VoltMXLogger EventTypes**/
	VoltMXLogger.prototype.DEFAULT = 0;
  	VoltMXLogger.prototype.FUNCTION_ENTRY = 1;
  	VoltMXLogger.prototype.FUNCTION_EXIT = 2;
  	VoltMXLogger.prototype.SUCCESS_CALLBACK = 3;
  	VoltMXLogger.prototype.ERROR_CALLBACK = 4;
  	VoltMXLogger.prototype.EXCEPTION = 5;
	VoltMXLogger.prototype.SERVICE_CALL = 6;
	VoltMXLogger.prototype.DATA_STORE = 7;

    /**
     * @member of  VoltMXLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    VoltMXLogger.prototype.defaultLogLevel = VoltMXLogger.prototype.logLevels["TRACE"];

    /**
     * @member of  VoltMXLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    VoltMXLogger.prototype.isValidLogLevel = function(logLevel){
        if((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")){
            if(typeof logLevel === "string"){		
                if (logLevel.toUpperCase() in this.logLevels){
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (typeof logLevel === "number"){
                for(var logLevelKey in this.logLevels){
                    if(logLevel === this.logLevels.logLevelKey){
                        return true;
                    }
                }
                return false;
            }
            else {
                return false;
            } 	
        }
    };


    /**
     * @member of  VoltMXLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    VoltMXLogger.prototype.getLogLevel = function(){
        return this.currentLogLevel;
    };

    /**
     * @member of  VoltMXLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is voltmx.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    VoltMXLogger.prototype.setPrintMethod = function(method){
        if((method !== undefined) && (method !== null) && (method !== "")){
            if(typeof method === "function"){
                this.printMethod = method;
            }
        }
    };

    VoltMXLogger.Utils = {};

    /**
     * @member of  VoltMXLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    VoltMXLogger.Utils.getDateTimeStamp = function(){
        var dateTimeStamp = "";

        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth()+1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if(hours > 12){
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        }
        else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }

        return dateTimeStamp;
    };
    return VoltMXLogger;
});