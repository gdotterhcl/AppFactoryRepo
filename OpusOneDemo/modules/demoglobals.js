const gblAlertTitle = "Opus One";

const gblMonthArray = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const FORMS = {
  LOGIN : "frmLogin",
  HOME : "frmHome",
  BARCODE : "frmScan",
  CLAIMS : "frmClaimList",
  CLAIMNEW : "frmClaimNew",
  CLAIMDONE : "frmClaimComplete",
  MAP : "frmUPS"
};

const IMAGES = {
  AGENT : {
    AVATAR : "botavatar.png"
  },
  
  ICON : "opusoneicon212.png",
  
  MAPS : {
    UPS  : "upslogocolor36.png",
    BLUE : "icons_map_blue36.png",
    ORNG : "icons_map.png"
  },
  
  DISMISS : "round_close_blue_48dp.png"
};

const MSGTYPE = {
  AGENT : "agent",
  USER : "user"
};

const SKINS = {
  STATUS : {
    NEW      : "lblstatusnew",
    AWAITRET : "lblstatusinproc",
    INSPECT  : "lblstatusinspect",
    INPROC   : "lblstatusinproc",
    REFUND   : "lblstatusrefund",
    REPLACE  : "lblstatusreplace",
    REPAIR   : "lblstatusrepair",
    REJECT   : "lblstatusreject"
  }  
};

const DATAOBJ = {
  PRODUCT : "product",
  RMA : "RMAClaim"
};

const SERVICES = {
  GOOGLE : "googleMaps",
  
  LOOKUP : {
    PRODUCT : "OpusOneProductLookup"
  },
  
  LEAP : {
    RMA : "LeapRMAClaim"
  },
  
  OBJ : {
    NOTIF : "OpusOneNotif",
    PRODUCT : "OpusOneProduct",
    RMA : "OpusOneLeapRMA"
  }
};

const SVCOPS = {
  GOOGLE : {
    ZIPFROMLATLON : "getZipCodeFromLatLong"
  },
  
  LOOKUP : {
    PRODUCT : "getProductLookupData",
    PRODONE : "getProductLookupByCode"
  }
};
