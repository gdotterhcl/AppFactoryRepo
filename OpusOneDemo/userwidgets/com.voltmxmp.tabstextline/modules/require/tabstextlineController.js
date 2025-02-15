/*
#
#  Created by Team HCL.
#  Copyright (c) 2018 HCL Software Inc. All rights reserved.
#
*/
define(function () {
  var voltmxLoggerModule = require('com/voltmxmp/tabstextline/voltmxLogger');
  var voltmxmp = voltmxmp || {};
  voltmxmp.logger = (new voltmxLoggerModule("Tabs")) || function () {};
  voltmxmp.logger.setLogLevel("DEBUG");
  voltmxmp.logger.enableServerLogging = true;
  constants.DEFAULT_TAB_WIDTH = "33.3%";
  constants.DEFAULT_TAB_COUNT = 6;
  constants.LAST_SELECTED_INDEX = 0;
  constants.DEFAULT_SELECTED_INDEX = 0;
  constants.DEFAULT_MIN_TAB_COUNT=1;
  return {
    constructor: function (baseConfig, layoutConfig, pspConfig) {
      //var analytics=require("com/voltmxmp/"+"tabstextline"+"/analytics");
      //analytics.notifyAnalytics();
      this.applyBindings();
      this._tabCount = constants.DEFAULT_TAB_COUNT;
      this._widthOfTab = constants.DEFAULT_TAB_WIDTH;
      this._lastSelectedIndex = constants.LAST_SELECTED_INDEX;
      this._currentSelectedIndex = constants.DEFAULT_SELECTED_INDEX;
      this.title0 = null;
      this.title1 = null;
      this.title2 = null;
      this.title3 = null;
      this.title4 = null;
      this.title5 = null;
      this._postShowFlag = true;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function () {
      defineGetter(this, "tabCount", function () {
        voltmxmp.logger.trace("----------Entering tabCount Getter---------", voltmxmp.logger.FUNCTION_ENTRY);
        return this._tabCount;
      });
      defineSetter(this, "tabCount", function (val) {
        voltmxmp.logger.trace("----------Entering tabCount Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        try {
          var baseContext = require('com/voltmxmp/tabstextline/baseTab');
          if (isNaN(val) || val > constants.DEFAULT_TAB_COUNT || val <= 0) {
            var exception = {};
            exception.Error = "INVALID_TABCOUNT";
            exception.property = "tabCount";
            exception.message = "Tabs created should be in range of "+constants.DEFAULT_MIN_TAB_COUNT+" and "+ constants.DEFAULT_TAB_COUNT;
            throw exception;
          }
          this.baseContext = baseContext;
          this._tabCount = val;
        } catch (exception) {
          voltmxmp.logger.error("#####Exception in tabCount : " + exception.message + exception.property, voltmxmp.logger.EXCEPTION);
          if (exception.Error === "INVALID_TABCOUNT") {
            throw exception;
          }
        }
        voltmxmp.logger.trace("----------Entering tabCount Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
      });
      defineGetter(this, "tabWidth", function () {
        voltmxmp.logger.trace("----------Entering tabWidth Getter---------", voltmxmp.logger.FUNCTION_ENTRY);
        return this._widthOfTab;
      });
      defineSetter(this, "tabWidth", function (val) {
        voltmxmp.logger.trace("----------Entering tabWidth Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        try {
          var regex=/^[0-9]+(\.\d+)?[%]$/;
          if (!regex.test(val) || parseInt(val)<=0) {
            var exception={};
            exception.Error = "INVALID_TABWIDTH";
            exception.property = "tabWidth";
            exception.message = "Invalid tabWidth (should be in %)";
            throw exception;
          }
          this._widthOfTab = val;
          this.view.flxIndicator.width = val;
        } catch (exception) {
          voltmxmp.logger.error("#####Exception in tabWidth : " + exception.message, voltmxmp.logger.EXCEPTION);
          if (exception.Error === "INVALID_TABWIDTH") {
            throw exception;
          }
        }
        voltmxmp.logger.trace("----------Entering tabWidth Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
      });
      defineGetter(this, "title0", function () {
        voltmxmp.logger.trace("----------Entering title0 Getter---------", voltmxmp.logger.FUNCTION_ENTRY);
        return this._title0;
      });
      defineSetter(this, "title0", function (val) {
        voltmxmp.logger.trace("----------Entering title0 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        try {
          this._title0 = val;
        } catch (exception) {
          voltmxmp.logger.error("#####Exception in title0 : " + exception.message, voltmxmp.logger.EXCEPTION);
        }
        voltmxmp.logger.trace("----------Entering title0 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
      });
      defineGetter(this, "title1", function () {
        voltmxmp.logger.trace("----------Entering title1 Getter---------", voltmxmp.logger.FUNCTION_ENTRY);
        return this._title1;
      });
      defineSetter(this, "title1", function (val) {
        voltmxmp.logger.trace("----------Entering title1 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        try {
          this._title1 = val;
        } catch (exception) {
          voltmxmp.logger.error("#####Exception in title1 : " + exception.message, voltmxmp.logger.EXCEPTION);
        }
        voltmxmp.logger.trace("----------Entering title1 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
      });
      defineGetter(this, "title2", function () {
        voltmxmp.logger.trace("----------Entering title2 Getter---------", voltmxmp.logger.FUNCTION_ENTRY);
        return this._title2;
      });
      defineSetter(this, "title2", function (val) {
        voltmxmp.logger.trace("----------Entering title2 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        try {
          this._title2 = val;
        } catch (exception) {
          voltmxmp.logger.error("#####Exception in title2 : " + exception.message, voltmxmp.logger.EXCEPTION);
        }
        voltmxmp.logger.trace("----------Entering title2 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
      });
      defineGetter(this, "title3", function () {
        voltmxmp.logger.trace("----------Entering title3 Getter---------", voltmxmp.logger.FUNCTION_ENTRY);
        return this._title3;
      });
      defineSetter(this, "title3", function (val) {
        voltmxmp.logger.trace("----------Entering title3 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        try {
          this._title3 = val;
        } catch (exception) {
          voltmxmp.logger.error("#####Exception in title3 : " + exception.message, voltmxmp.logger.EXCEPTION);
        }
        voltmxmp.logger.trace("----------Entering title3 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
      });
      defineGetter(this, "title4", function () {
        voltmxmp.logger.trace("----------Entering title4 Getter---------", voltmxmp.logger.FUNCTION_ENTRY);
        return this._title4;
      });
      defineSetter(this, "title4", function (val) {
        voltmxmp.logger.trace("----------Entering title4 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        try {
          this._title4 = val;
        } catch (exception) {
          voltmxmp.logger.error("#####Exception in title4 : " + exception.message, voltmxmp.logger.EXCEPTION);
        }
        voltmxmp.logger.trace("----------Entering title4 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
      });
      defineGetter(this, "title5", function () {
        voltmxmp.logger.trace("----------Entering title5 Getter---------", voltmxmp.logger.FUNCTION_ENTRY);
        return this._title5;
      });
      defineSetter(this, "title5", function (val) {
        voltmxmp.logger.trace("----------Entering title5 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        try {
          this._title5 = val;
        } catch (exception) {
          voltmxmp.logger.error("#####Exception in title5 : " + exception.message, voltmxmp.logger.EXCEPTION);
        }
        voltmxmp.logger.trace("----------Entering title5 Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
      });

    },

    applyBindings : function(){
      this.view.preShow = this.PreShow.bind(this);
    },
    PreShow : function(){
      this.invokePreShow();
    },
    /**
		 * @function invokePreShow
		 * @description On invokePreShow it will call the createTabs
		 * @public
		 */
    invokePreShow : function(){
      voltmxmp.logger.debug("#####Entering invokePreShow", voltmxmp.logger.FUNCTION_ENTRY);
      try{
        if(this._postShowFlag){
          this.createTabs(null);
          this._postShowFlag=false;
        }
      }
      catch(exception){
        voltmxmp.logger.error("#####Exception in invokePreShow : " + exception.message, voltmxmp.logger.EXCEPTION);
        throw exception;
      }
      voltmxmp.logger.debug("#####Entering invokePreShow", voltmxmp.logger.FUNCTION_ENTRY);
    },
    /**
		 * @function createTabs
		 * @description Helper and validation function that creates tabs
		 * @public
		 * @param {Object} tabData
		 */
    createTabs: function (tabData) {
      try {
        voltmxmp.logger.debug("#####Entering createTabs", voltmxmp.logger.FUNCTION_ENTRY);
        this._lastSelectedIndex = this.defTab;
        this._currentSelectedIndex = this.defTab;
        this.view.flxIndicator.left = "0%";
        this.tabData = [];
        this.view.lblSkin.isVisible = false;
        this.view.lblDullSkin.isVisible = false;
        if (tabData === null || tabData === undefined) {
          this.tabData = [this.title0, this.title1, this.title2, this.title3, this.title4, this.title5];
        } else {
          this.tabCount = tabData.length;
          if (this.tabCount > constants.DEFAULT_TAB_COUNT || this.tabCount === 0) {
            this.view.remove(this.view.flxTabs);
            return;
          }
          this.tabData = tabData;
        }
        for (var loopCount = 0; loopCount < constants.DEFAULT_TAB_COUNT; loopCount++) {
          if (this.view["flxTab" + loopCount] !== null && this.view["flxTab" + loopCount] !== undefined) {
            this.view.flxTabs.remove(this.view["flxTab" + loopCount]);
          }
        }
        this.checkNullForTitles();
        this.addFlexsToTheHeader();
        this.goToTab(this.defTab);
        voltmxmp.logger.debug("#####Entering createTabs", voltmxmp.logger.FUNCTION_ENTRY);
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in createTabs : " + exception.message, voltmxmp.logger.EXCEPTION);
        throw exception
      }
    },
    /**
		 * @function checkNullForTitles
		 * @description validator function
		 * @public
		 */
    checkNullForTitles : function(){
      voltmxmp.logger.debug("#####Entering checkNullForTitles", voltmxmp.logger.FUNCTION_ENTRY);
      try{
        for(var tabIndex=0;tabIndex<this.tabCount;tabIndex++){
          if(voltmx.sdk.isNullOrUndefined(this.tabData[tabIndex]) || this.tabData[tabIndex]===""){
            var exception={};
            exception.message=" Tab Title can not be null or Empty";
            exception.error="INVALID_TAB_TITLE";
            throw exception;
          }
        }
      }catch(exception){
        if(exception.error==="INVALID_TAB_TITLE"){
          throw exception;
        }
      }
      voltmxmp.logger.debug("#####Entering checkNullForTitles", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function addFlexsToTheHeader
		 * @description This function helper function for createTabs
		 * @private
		 */

    addFlexsToTheHeader: function () {
      voltmxmp.logger.trace("----------Entering addFlexsToTheHeader function ---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        var left = 0;
        var width = parseInt(this._widthOfTab);
        for (var loopCount = 0; loopCount < this.tabCount; loopCount++) {
          var id = "flxTab" + loopCount;
          var createdFlex = this.baseContext.createDynamicFlex(id, left, 0, 80, width, null, null, this.onClickOfTabs.bind(this));
          this.view.flxTabs.add(createdFlex);
          left = left + width;
        }
        this.addTitleToTheTabs();
        this.view.flxTabs.setContentOffset({
          x: 0,
          y: 0
        }, true);
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in addFlexsToTheHeader : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting addFlexsToTheHeader function---------------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
		 * @function addTitleToTheTabs
		 * @description This function is used create Labels and create a Title to the Tab
		 * @private
		 */
    addTitleToTheTabs: function () {
      voltmxmp.logger.trace("----------Entering addTitleToTheTabs function ---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        for (var loopCount = 0; loopCount < this.tabCount; loopCount++) {
          var id = "lblTitle" + loopCount;
          var createdLabel = this.baseContext.createDynamicLabels(id, this.tabData[loopCount], "50%", "60%");
          createdLabel.skin = this.sknTextInactive;
          this.view["flxTab" + loopCount].add(createdLabel);
        }
        this.view.lblTitle0.skin = this.sknTextActive;
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in addTitleToTheTabs : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting addTitleToTheTabs function---------------", voltmxmp.logger.FUNCTION_EXIT);

    },
    /**
		 * @function onClickOfTabs
		 * @description This function is used to invoke when consumer click on the Tabs
		 * @private
		 * @param {JSON} eventObject
		 */
    onClickOfTabs: function (eventObject) {
      voltmxmp.logger.trace("----------Entering onClickOfTabs function---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        var index = (eventObject.id).charAt(eventObject.id.length - 1);
        this.baseEvent(index);
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in onClickOfTabs : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting onClickOfTabs function---------------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function baseEvent
		 * @description This is a helper function
		 * @private
		 * @param {string} index
		 */
    baseEvent: function (index) {
      voltmxmp.logger.trace("----------Entering baseEvent function---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        this.swapTheSkinForSelected(index);
        this._currentSelectedIndex = index;
        if(index==this.tabCount-1){
          this.view.flxTabs.scrollToEnd();
        }
        else{
          this.baseContext.setContentOffset(this,index);
        }
        if (!voltmx.sdk.isNullOrUndefined(this.onTabChange)) {
          this.onTabChange(this.getSelectedTabDetails());
        }
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in baseEvent : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting baseEvent function---------------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function swapTheSkinForSelected
		 * @description This function is used to swap the skin between the current Selected tab and the last selected Tab.
		 * @private
		 * @param {string} index
		 */
    swapTheSkinForSelected: function (index) {
      voltmxmp.logger.trace("----------Entering swapTheSkinForSelected function---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        if (index !== this._lastSelectedIndex) {
          this.view["lblTitle" + index].skin = this.sknTextActive;
          this.view["lblTitle" + this._lastSelectedIndex].skin = this.sknTextInactive;
          this.moveIndicator(index, this._lastSelectedIndex);
          this._lastSelectedIndex = index;
        }
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in swapTheSkinForSelected : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting swapTheSkinForSelected function---------------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function moveIndicator
		 * @description This function is used to move the indicator
		 * @private
		 * @param {string} index
		 * @param {string} recentSelected
		 */
    moveIndicator: function (index, recentSelected) {
      voltmxmp.logger.trace("----------Entering moveIndicator function---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        var left,
            width,
            finalLeft = null,
            finalWidth;
        if (index !== recentSelected) {
          var finalIndex = index;
          if (index - recentSelected > 0) {
            finalIndex = recentSelected;
            finalLeft = this.view["flxTab" + index].left;
            width = Math.abs(index - recentSelected + 1);
          } else {
            width = Math.abs(index - recentSelected) + 1;
          }
          width = width * parseInt(this._widthOfTab) + "%";
          left = this.view["flxTab" + finalIndex].left;
          finalWidth = this._widthOfTab;
          this.animateTab(left, width, finalLeft, finalWidth);
        }
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in moveIndicator : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting moveIndicator function---------------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function animateTab
		 * @description This function is to animate the indicator towards the Right side.
		 * @private
		 * @param {string} left
		 * @param {string} width
		 * @param {string} finalLeft
		 * @param {string} finalWidth
		 */
    animateTab: function (left, width, finalLeft, finalWidth) {
      voltmxmp.logger.trace("----------Entering animateTab function---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        if (finalLeft === null){
          finalLeft = left;
        }
        this.view.flxIndicator.animate(
          voltmx.ui.createAnimation({
            "100": {
              "left": finalLeft,
              "width": finalWidth,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
            },
            "50": {
              "left": left,
              "width": width,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.01
          });
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in animateTab : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting animateTab function---------------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function moveLeft
		 * @description This API is used to move the selected Tab towards the Left
		 * @private
		 */
    moveLeft: function () {
      voltmxmp.logger.trace("----------Entering moveLeft api---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        if (this._currentSelectedIndex > 0) {
          this._currentSelectedIndex = parseInt(this._currentSelectedIndex) - 1;
          this.baseEvent(this._currentSelectedIndex);
          this.view.flxTabs.scrollToWidget(this.view["flxTab" + this._currentSelectedIndex]);
        }
        else{
          var exception={};
          exception.message="Out of bound Exception";
          exception.error="OUT_OF_BOUND_EXCEPTION";
          throw exception;
        }
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in moveLeft : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting moveLeft api---------------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function moveRight
		 * @description This AP is used to move the selectedtab towards the Right
		 * @private
		 */
    moveRight: function () {
      voltmxmp.logger.trace("----------Entering moveRight api---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        if (this.tabCount > this._currentSelectedIndex && parseInt(this._currentSelectedIndex) + 1 !== this.tabCount) {
          this._currentSelectedIndex = parseInt(this._currentSelectedIndex) + 1;
          this.baseEvent(this._currentSelectedIndex);
          this.view.flxTabs.scrollToWidget(this.view["flxTab" + this._currentSelectedIndex]);
        }
        else{
          var exception={};
          exception.message="Out of bound Exception";
          exception.error="OUT_OF_BOUND_EXCEPTION";
          throw exception;
        }
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in moveRight : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting moveRight api---------------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function goToTab
		 * @description This api is used to select the tab at run time.
		 * @public
		 * @param {string} tabindex
		 */
    goToTab: function (tabIndex) {
      voltmxmp.logger.trace("----------Entering goToTab function---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        if ((tabIndex !== null && tabIndex !== undefined && !isNaN(tabIndex)) && (tabIndex >= 0 && tabIndex < this.tabCount)) {
          this._currentSelectedIndex = tabIndex;
          this.baseEvent(this._currentSelectedIndex);
          this.view.flxTabs.scrollToWidget(this.view["flxTab" + this._currentSelectedIndex]);
        }
        else{
          throw{"Error":"INVALID_TAB_INDEX",
                "message":"TabIndex doesn't exist"};
        }
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in goToTab : " + exception.message, voltmxmp.logger.EXCEPTION);
        throw exception;
      }
      voltmxmp.logger.trace("---------------Exiting goToTab function---------------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function getSelectedTabDetails
		 * @description This api is used to know which tab is selected at run time.
		 * @public
		 * @return {JSON} tabIndex and tabTitle
		 */
    getSelectedTabDetails: function () {
      voltmxmp.logger.trace("----------Entering getSelectedTabDetails function---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        var index = this._currentSelectedIndex;
        var tabDetails = {};
        tabDetails.text = this.tabData[index];
        tabDetails.tabIndex = index;
        return tabDetails;
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in getSelectedTabDetails : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("---------------Exiting getSelectedTabDetails function---------------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function getSelectedTabIndex
		 * @description This api is used to get the current selected Index
		 * @public
		 * @return {int} tabIndex
		 */
    getSelectedTabIndex: function () {
      try {
        voltmxmp.logger.trace("----------Entering getSelectedTabIndex function---------", voltmxmp.logger.FUNCTION_ENTRY);
        return this._currentSelectedIndex;
      } catch (exception) {
        voltmxmp.logger.error("#####Exception in getSelectedTabIndex : " + exception.message, voltmxmp.logger.EXCEPTION);
      }
    }
  };
});