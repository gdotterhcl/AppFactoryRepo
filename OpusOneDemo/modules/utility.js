function logData(logObject, logString) 
{
  if (logObject !== undefined && logObject !== null)
  {
    logObject.text = logString + "\r\n" + logObject.text;
  }
}

/* Network Check */
function isNetworkAvailable()
{
  voltmx.print("##### isNetworkAvailable() start");

  var networkIsAvailable = false;

  networkIsAvailable = voltmx.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);

  voltmx.print("##### Network available: " + networkIsAvailable);

  voltmx.print("##### isNetworkAvailable() end");

  return networkIsAvailable;
}

/* Alert / Loading Screen Functions */
function showLoadingScreen(message) 
{
  //message = " " + message + " \n";
  //voltmx.print(message);
  message = " " + message + " ";

  voltmx.application.showLoadingScreen("lblblockedui", message, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
}

function dismissLoadingScreen() 
{
  voltmx.print("##### dismissLoadingScreen() start");
  
  voltmx.application.dismissLoadingScreen();
  
  voltmx.print("##### dismissLoadingScreen() end");
}

function showAlertWithHandler(alertType, alertMsg, lblYes, lblNo, handlerFunc) 
{
  voltmx.ui.Alert({
    message: alertMsg,
    alertType: alertType,
    alertTitle: gblAlertTitle,
    yesLabel: (lblYes === "" ? "Ok" : lblYes),
    noLabel: (lblNo === "" ? "Cancel" : lblNo),
    alertHandler: handlerFunc
  }, {});
}

/* Toast Functions */
function showToast(toastMsg, toastCallback)
{
  //#ifdef iphone
  voltmx.ui.Alert(
    {
      message:toastMsg,
      alertType: constants.ALERT_TYPE_INFO,
      alertTitle: gblAlertTitle,
      yesLabel:"Ok",
      noLabel: "Cancel",
      alertHandler: toastCallback
    },{}
  );  
  //#endif
  //#ifdef android
  toast = new voltmx.ui.Toast({"text" : toastMsg, "duration" : constants.TOAST_LENGTH_SHORT});
  toast.alignConfig = {gravity: constants.TOAST_POS_BOTTOM_CENTER, y:"100"};
  toast.show();
  //#endif
}

function toastAlertHandler()
{
  // Stubbed for now
}

/* Date/Time Functions */

/*
	formatSelectedDate(calendarWidget)
    Input:  Calendar Widget reference
    Output:  Date string in format "YYYY-MM-DD"
*/
function formatSelectedDate(calWidget)
{
  var formattedDate = "";

  if (calWidget.dateComponents !== null)
  {
    var selectedyear = calWidget.year;
    var selectedmon = calWidget.month;
    var selectedday = calWidget.day;

    if (selectedmon < 10)
    {
      selectedmon = "0" + selectedmon;
    }

    if (selectedday < 10)
    {
      selectedday = "0" + selectedday;
    }

    formattedDate = selectedyear + "-" + selectedmon + "-" + selectedday;
  }

  return formattedDate;
}

/*
	formatDateForDB(calendarWidget)
    Input:  Calendar Widget reference
    Output:  Date string in UTC format "YYYY-MM-DDT00:00:00Z"
*/
function formatDateForDB(calWidget)
{
  var formattedDate = "";

  if (calWidget.dateComponents !== null)
  {
    var selectedyear = calWidget.year;
    var selectedmon = calWidget.month;
    var selectedday = calWidget.day;

    if (selectedmon < 10)
    {
      selectedmon = "0" + selectedmon;
    }

    if (selectedday < 10)
    {
      selectedday = "0" + selectedday;
    }

    formattedDate = selectedyear + "-" + selectedmon+ "-" + selectedday + "T00:00:00Z";
  }

  return formattedDate;
}

function formatDateTimeForDB(calWidget, txtWidget)
{
  // Date in [d,m,y,h,m,s] via dateComponents
  // Time as hh:mi am
  var formattedDate = "";
  var formattedTime = "";

  if (calWidget.dateComponents !== null)
  {
    var selectedyear = calWidget.year;
    var selectedmon = calWidget.month;
    var selectedday = calWidget.day;

    if (selectedmon < 10)
    {
      selectedmon = "0" + selectedmon;
    }

    if (selectedday < 10)
    {
      selectedday = "0" + selectedday;
    }

    formattedDate = selectedyear + "-" + selectedmon + "-" + selectedday;
  }

  if (txtWidget.text.trim() !== "")
  {
    var hourmin = txtWidget.text.split(":");  // 8:49 am will be "8" and "49 am"
    var hour = hourmin[0];
    var minampm = hourmin[1].split(" ");
    var min = minampm[0];
    var ampm = minampm[1]; //txtWidget.text.trim().substr((txtWidget.text.trim().length - 1), -2);

    if (hour < 12 && ampm === "pm")
    {
      hour = (voltmx.os.toNumber(hour) + 12);
    }

    if (hour < 10 && hour.substr(0, 1) !== "0")
    {
      hour = "0" + hour;
    }

    if (min < 10 && min.substr(0, 1) !== "0")
    {
      min = "0" + min;
    }

    formattedTime = hour + ":" + min + ":00";
  }

  return (formattedDate + "T" + formattedTime + "Z");
}

function formatNullUndefAsEmptyString(fieldRef)
{
  voltmx.print("##### formatNullUndefAsEmptyString() start #######");

  var retStr;
  var retEmpStr = "";

  if (fieldRef === undefined || fieldRef === null)
  {
    voltmx.print("##### formatNullUndefAsEmptyString() field is null/undef, returning empty string. #######");
    retStr = retEmpStr;
  }
  else
  {
    retStr = fieldRef;
  }

  voltmx.print("##### formatNullUndefAsEmptyString() start #######");

  return retStr;
}


/**
 * Input:  Date string in UTC format "YYYY-MM-DDTHH:mm:ssZ"
*/
function setCalWidgetDateTimeFromDB(dbDate, calWidget, txtWidget)
{
  var newDateComp = null;
  var formattedTime = "";

  if (dbDate !== null && dbDate !== undefined)
  {
    var datetoformat = dbDate.split("T");
    var datetoparse = datetoformat[0];
    var yr = datetoparse.substring(0, 4);
    var mo = datetoparse.substring(5, 7);
    var dy = datetoparse.substring(8);

    var timestr = datetoformat[1];
    var timetoparse = timestr.slice(0, (timestr.length - 1));  // drops the Z
    var timesplit = timetoparse.split(":");
    var hr = timesplit[0];
    var mi = timesplit[1];
    var sc = timesplit[2];

    newDateComp = [dy, mo, yr, 0, 0, 0];

    if (hr.substr(0, 1) === "0")
    {
      formattedTime += hr.substr(1, 1) + ":";
      formattedTime += mi + " AM";
    }
    else
    {
      formattedTime += hr + ":";
      formattedTime += mi + " PM";
    }
  }

  calWidget.dateComponents = newDateComp;
  txtWidget.text = formattedTime;
}

function setCalWidgetDateFromDB(dbDate, calWidget)
{
  var newDateComp = null;

  if (dbDate !== null && dbDate !== undefined)
  {
    var datetoformat = dbDate.split("T");
    var datetoparse = datetoformat[0];
    var yr = datetoparse.substring(0, 4);
    var mo = datetoparse.substring(5, 7);
    var dy = datetoparse.substring(8);

    newDateComp = [dy, mo, yr, 0, 0, 0];
  }

  calWidget.dateComponents = newDateComp;
}

/**
 * @function
 *
 * @param dbVal 
 * @param chkWidget 
 */
function setCheckBoxValueFromDB(dbVal, chkWidget)
{
  var retVal = null;

  if (dbVal === true)
  {
    retVal = [chkWidget.masterData[0][0].toString()];
  }
  else 
  {
    retVal = null;
  }

  return retVal;
}

/**
 * @function
 *
 * @param chkWidget 
 */
function getCheckBoxValueForDB(chkWidget)
{
  var retVal = false;

  if (chkWidget.selectedKeys !== null && chkWidget.selectedKeys !== undefined)
  {
    var valueToCheck = chkWidget.selectedKeys[0];

    if (valueToCheck !== "none" && valueToCheck !== "selectone")
    {
      retVal = true;
    }
  }

  return retVal;
}

/*
	formatDBDateForApp(dateFromDB)
    Input:  Date string in UTC format "YYYY-MM-DDT00:00:00Z"
    Output:  Date/time string in format "MM/DD/YYYY HH:MI:SS"
*/

/**
 * @function
 *
 * @param dbDateTime 
 * @param textWidget 
 */
function setTextValueTimeFromDB(dbDateTime, txtWidget, showSeconds)
{
  var newTimeStr = "";

  if (dbDateTime !== null && dbDateTime !== undefined)
  {
    var datetoformat = dbDateTime.split("T");
    var timestr = datetoformat[1];
    var timetoparse = timestr.slice(0, (timestr.length - 1));  // drops the Z
    var timesplit = timetoparse.split(":");
    var hr = timesplit[0];
    var mi = timesplit[1];
    var sc = timesplit[2];

    newTimeStr = hr + ":" + mi;

    if (showSeconds === true)
    {
      newTimeStr += ":" + sc;
    }
  }

  txtWidget.text = newTimeStr;
}

function formatDBDateForApp(dbDate)
{
  // Incoming date has the format YYYY-MM-DDTHH:MM:SSZ
  // POC is not doing time zone conversion.
  var retDate = "";

  if (dbDate !== null && dbDate !== undefined)
  {
    var datetoformat = dbDate.split("T");
    var datetoparse = datetoformat[0];
    var yr = datetoparse.substring(0, 4);
    var mo = datetoparse.substring(5, 7);
    var dy = datetoparse.substring(8);

    retDate = mo + "/" + dy + "/" + yr;
  }

  return retDate;
}

function formatDBDateTimeForApp(dbDate, useSeconds, useAMPM)
{
  // Incoming date has the format YYYY-MM-DDTHH:MM:SSZ
  // POC is not doing time zone conversion.
  var retDate = "";

  if (dbDate !== null && dbDate !== undefined)
  {
    var ampm = "";
    var datetoformat = dbDate.split("T");
    var datetoparse = datetoformat[0];
    var yr = datetoparse.substring(0, 4);
    var mo = datetoparse.substring(5, 7);
    var dy = datetoparse.substring(8);

    var timestr = datetoformat[1];
    var timetoparse = timestr.slice(0, (timestr.length - 1));  // drops the Z
    var timesplit = timetoparse.split(":");
    var hr = timesplit[0];
    var mi = timesplit[1];
    var sc = timesplit[2].split(".")[0];

    if (hr.substr(0,1) === "0")
    {
      hr = hr.substr(1,1);
      ampm = " AM";
    }
    else
    {
      if (voltmx.os.toNumber(hr) > 12)
      {
        hr = (voltmx.os.toNumber(hr) - 12).toString();
      }
      ampm = " PM";
    }

    retDate = mo + "/" + dy + "/" + yr + " " + hr + ":" + mi;

    if (useSeconds !== undefined && useSeconds !== null && useSeconds === true)
    {
      retDate += ":" + sc;
    }

    if (useAMPM !== undefined && useAMPM !== null && useAMPM === true)
    {
      retDate += ampm;
    }
  }

  return retDate;
}

/**
 * @function
 *
 * @param dbDate 
 */
function formatDBTimeForApp(dbDate)
{
  // Incoming date has the format YYYY-MM-DDTHH:MM:SSZ
  // POC is not doing time zone conversion.
  var retTime = "";

  if (dbDate !== null && dbDate !== undefined)
  {
    var datetoformat = dbDate.split("T");

    var timestr = datetoformat[1];
    var timetoparse = timestr.slice(0, (timestr.length - 1));  // drops the Z
    var timesplit = timetoparse.split(":");
    var hr = timesplit[0];
    var mi = timesplit[1];
    var sc = timesplit[2].split(".")[0];

    retDate = hr + ":" + mi + ":" + sc;
  }

  return retTime;
}

function formatDBTimeNoSecForApp(dbDate)
{
  // Incoming date has the format YYYY-MM-DDTHH:MM:SSZ
  // POC is not doing time zone conversion.
  var retTime = "";

  if (dbDate !== null && dbDate !== undefined)
  {
    var datetoformat = dbDate.split("T");

    var timestr = datetoformat[1];
    var timetoparse = timestr.slice(0, (timestr.length - 1));  // drops the Z
    var timesplit = timetoparse.split(":");
    var hr = timesplit[0];
    var mi = timesplit[1];

    retDate = hr + ":" + mi;
  }

  return retTime;
}

/*
	getDateTimeNow()
    Input:  Nothing
    Output:  Date/time string in format "YYYY-MM-DD HH:MI:SS"
*/
function getDateTimeNow() 
{
  var returnDate = "";

  var newDate = new Date();

  // Date component
  var newYear = newDate.getFullYear();
  var newMonth = newDate.getMonth();
  var newDay = newDate.getDate();

  newMonth += 1;  // month counter is zero-based
  if (newMonth < 10) 
  {
    newMonth = "0" + newMonth;
  }

  if (newDay < 10) 
  {
    newDay = "0" + newDay;
  }

  // Time component
  var newHour = newDate.getHours();
  if (newHour < 10)
  {
    newHour = "0" + newHour;
  }

  var newMinutes = newDate.getMinutes();
  if (newMinutes < 10)
  {
    newMinutes = "0" + newMinutes;
  }

  var newSeconds = newDate.getSeconds();
  if (newSeconds < 10)
  {
    newSeconds = "0" + newSeconds;
  }

  returnDate = newYear + "-" + newMonth + "-" + newDay + " " + newHour + ":" + newMinutes + ":" + newSeconds;

  return returnDate;
}

/*
	getDateTimeNowForMsg()
    Input:  Nothing
    Output:  Date/time string in format "MM/DD/YYYY HH:MI[AP]M"
*/
function getDateTimeNowForMsg() 
{
  var returnDate = "";

  var newDate = new Date();

  // Date component
  var newYear = newDate.getFullYear();
  var newMonth = newDate.getMonth();
  var newDay = newDate.getDate();

  newMonth += 1;  // month counter is zero-based
  if (newMonth < 10) 
  {
    newMonth = "0" + newMonth;
  }

  if (newDay < 10) 
  {
    newDay = "0" + newDay;
  }

  // Time component
  var newHour = newDate.getHours();
  if (newHour < 10)
  {
    newHour = "0" + newHour;
  }

  var newMinutes = newDate.getMinutes();
  if (newMinutes < 10)
  {
    newMinutes = "0" + newMinutes;
  }

  var newSeconds = newDate.getSeconds();
  if (newSeconds < 10)
  {
    newSeconds = "0" + newSeconds;
  }

  var t = "AM";

  if (newHour >= 12)
  {
    t = "PM";
  }

  returnDate = newMonth + "/" + newDay + "/" + newYear  + " " + newHour + ":" + newMinutes + "" + t;

  return returnDate;
}

function getDateToday()
{
  var returnDate = "";

  var newDate = new Date();

  // Date component
  var newYear = newDate.getFullYear();
  var newMonth = newDate.getMonth();
  var newDay = newDate.getDate();

  newMonth += 1;  // month is zero-based
  if (newMonth < 10) 
  {
    newMonth = "0" + newMonth;
  }

  if (newDay < 10) 
  {
    newDay = "0" + newDay;
  }

  returnDate = newYear + "-" + newMonth + "-" + newDay;

  return returnDate;
}

/**
 * @function
 *
 */
function getCurrentMonthNum()
{
  var today = new Date();
  
  // month is zero-based
  var thisMonth = today.getMonth();
  
  return thisMonth;
}

/**
 * @function
 *
 */
function getCurrentMonthName()
{
  var today = new Date();
  var month = today.toLocaleString('default', {month : 'long'});
  
  return month;
}

/**
 * @function
 *
 */
function getPreviousMonthName()
{
  var today = new Date();
  today.setMonth(today.getMonth() - 1);
  var prevMonth = today.toLocaleString('default', {month : 'long'});
  
  return prevMonth;  
}

function getCurrentMonthShortName()
{
  var today = new Date();
  var month = today.toLocaleString('default', {month : 'short'});
  
  return month;
}

function getPreviousMonthShortName()
{
  var today = new Date();
  today.setMonth(today.getMonth() - 1);
  var prevMonth = today.toLocaleString('default', {month : 'short'});
  
  return prevMonth;  
}

/*
	getDateRawText()
    Input:  Nothing
    Output:  Date/time string in format "YYYYMMDD"
*/
function getDateNowRawText() 
{
  var returnDate = "";

  var newDate = new Date();

  // Date component
  var newYear = newDate.getFullYear();
  var newMonth = newDate.getMonth();
  var newDay = newDate.getDate();

  if (newMonth < 10) 
  {
    newMonth = "0" + newMonth;
  }

  if (newDay < 10) 
  {
    newDay = "0" + newDay;
  }

  returnDate = newYear + "" + newMonth + "" + newDay;

  return returnDate;
}

/*
	getTime24NowRawText()
    Input:  Nothing
    Output:  Time string in 24hr format "HHMI"
*/
function getTime24NowRawText() 
{
  var returnDate = "";

  var newDate = new Date();

  // Time component
  var newHour = newDate.getHours();
  if (newHour < 10)
  {
    newHour = "0" + newHour;
  }

  var newMinutes = newDate.getMinutes();
  if (newMinutes < 10)
  {
    newMinutes = "0" + newMinutes;
  }

  var newSeconds = newDate.getSeconds();
  if (newSeconds < 10)
  {
    newSeconds = "0" + newSeconds;
  }

  returnDate = newHour + "" + newMinutes;

  return returnDate;
}

/*
	getDateTimeNowISO8601()
    Input:  Nothing
    Output:  Date string in UTC format "YYYY-MM-DDT00:00:00Z"
*/
function getDateTimeNowISO8601() 
{
  var returnDate = "";

  var newDate = new Date();

  // Date component
  var newYear = newDate.getFullYear();
  var newMonth = newDate.getMonth();
  var newDay = newDate.getDate();

  if (newMonth < 10) 
  {
    newMonth = "0" + newMonth;
  }

  if (newDay < 10) 
  {
    newDay = "0" + newDay;
  }

  // Time component
  var newHour = newDate.getHours();
  if (newHour < 10)
  {
    newHour = "0" + newHour;
  }

  var newMinutes = newDate.getMinutes();
  if (newMinutes < 10)
  {
    newMinutes = "0" + newMinutes;
  }

  var newSeconds = newDate.getSeconds();
  if (newSeconds < 10)
  {
    newSeconds = "0" + newSeconds;
  }

  returnDate = newYear + "-" + newMonth + "-" + newDay + "T" + newHour + ":" + newMinutes + ":" + newSeconds + "Z";

  return returnDate;
}

function toConvertMiles(meterValue)
{
  var mileValue = "";

  mileValue = meterValue * MATHCONSTANTS.METERSTOMILES;
  mileValue = mileValue.toFixed(1);

  if (mileValue === 0.0)
  {
    mileValue = meterValue * MATHCONSTANTS.METERSTOFEET;
    mileValue = mileValue.toFixed(0) + " Feet";
  }
  else
  {
    mileValue = mileValue + " Miles";
  }

  return mileValue;
}

function toConvertMins(secValue)
{
  var minValue = "";

  minValue = secValue / MATHCONSTANTS.SECSTOMIN;
  minValue = minValue.toFixed(0);

  if (minValue === 0)
  {
    minValue = secValue + " Seconds";
  }
  else
  {
    minValue = minValue + " Minutes";
  }

  return minValue;  
}

function getDpValue(dpStrInput)
{
  // Takes input like "248dp" and returns "248"
  voltmx.print("##### getDpValue() start");

  voltmx.print("##### getDpValue() input: " + dpStrInput);

  var dpidx = dpStrInput.indexOf("dp");

  voltmx.print("##### getDpValue() index of 'dp': " + dpidx);

  var retDp = dpStrInput;

  if (dpidx !== -1)
  {
    var dpval = dpStrInput.slice(0, dpidx);

    voltmx.print("##### getDpValue() slice: " + dpval);

    retDp = parseInt(dpval);

    voltmx.print("##### getDpValue() returning: " + retDp);
  }

  voltmx.print("##### getDpValue() end");

  return retDp;
}

function getPxValue(pxStrInput)
{
  // Takes input like "248px" and returns "248"
  voltmx.print("##### getDpValue() start");

  voltmx.print("##### getDpValue() input: " + pxStrInput);

  var pxidx = pxStrInput.indexOf("px");

  voltmx.print("##### getDpValue() index of 'px': " + pxidx);

  var retPx = pxStrInput;

  if (pxidx !== -1)
  {
    var pxval = pxStrInput.slice(0, pxidx);

    voltmx.print("##### getDpValue() slice: " + pxval);

    retPx = parseInt(pxval);

    voltmx.print("##### getDpValue() returning: " + retPx);
  }

  voltmx.print("##### getDpValue() end");

  return retPx;
}

function printScreenDims(display)
{
  var screenWidth = voltmx.os.deviceInfo().screenWidth;
  var deviceScrWidth = voltmx.os.deviceInfo().deviceWidth;
  var screenHeight = voltmx.os.deviceInfo().screenHeight;
  var deviceScrHeight = voltmx.os.deviceInfo().deviceHeight;

  var displayStr = "Screen width: " + screenWidth + "\nDevice screen width: " + deviceScrWidth + "\nScreen height: " + screenHeight + "\nDevice screen height: " + deviceScrHeight;

  if (display === true)
  {
    voltmx.ui.Alert({
      message: displayStr,
      alertType: constants.ALERT_TYPE_INFO,
      alertTitle: gblAlertTitle,
      yesLabel: "Ok",
      noLabel: "Cancel",
      alertHandler: null
    }, {});     
  }

  voltmx.print("##### Screen width: " + screenWidth + "; Device screen width: " + deviceScrWidth);
  voltmx.print("##### Screen height: " + screenHeight + "; Device screen height: " + deviceScrHeight);
}