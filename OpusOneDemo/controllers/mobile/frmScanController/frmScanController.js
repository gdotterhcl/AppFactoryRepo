define({ 

  BarcodeFormats : {
    FORMAT_ALL_FORMATS : 0,
    FORMAT_AZTEC : 4096,
    FORMAT_CODABAR : 8,
    FORMAT_CODE_128 : 1,
    FORMAT_CODE_39 : 2,
    FORMAT_CODE_93 : 4,
    FORMAT_DATA_MATRIX : 16,
    FORMAT_EAN_13 : 32,
    FORMAT_EAN_8 : 64,
    FORMAT_ITF : 128,
    FORMAT_PDF417 : 2048,
    FORMAT_QR_CODE : 256,
    FORMAT_UPC_A : 512,
    FORMAT_UPC_E : 1024,
    FORMAT_UNKNOWN : -1
  },

  _isiOS: (voltmx.os.deviceInfo().name.toLowerCase() === "iphone" || voltmx.os.deviceInfo().name.toLowerCase() === "ipad"),
  _isAndroid: (voltmx.os.deviceInfo().name.toLowerCase() === "android" || voltmx.os.deviceInfo().name.toLowerCase() === "androidtablet"),    

  onNavigate : function(context)
  {
    this.view.preShow = this.onPreShow();
    //this.view.MLKitBCScanner.codeFormats = [this.BarcodeFormats.FORMAT_ALL_FORMATS, this.BarcodeFormats.FORMAT_UPC_A, this.BarcodeFormats.FORMAT_UPC_E, this.BarcodeFormats.FORMAT_CODE_128, this.BarcodeFormats.FORMAT_CODE_39, this.BarcodeFormats.FORMAT_CODE_93, this.BarcodeFormats.FORMAT_QR_CODE];  
    this.view.MLKitBCScanner.addResultCallback(this.processScan);
  },

  onPreShow : function()
  {
    this.createMLScanner();
  }, 

  createMLScanner : function() 
  { 
    let MLKitBCScanner = new com.voltmx.MLKitBCScanner({
      "height": "100%",
      "id": "MLKitBCScanner",
      "isVisible": true,
      "left": "0dp",
      "masterType": constants.MASTER_TYPE_USERWIDGET,
      "isModalContainer": false,
      "skin": "slFbox",
      "top": "0dp",
      "width": "100%",
      "zIndex": 1,
      "overrides": {
        "MLKitBCScanner": 
        {
          "right": "viz.val_cleared",
          "bottom": "viz.val_cleared",
          "minWidth": "viz.val_cleared",
          "minHeight": "viz.val_cleared",
          "maxWidth": "viz.val_cleared",
          "maxHeight": "viz.val_cleared",
          "centerX": "viz.val_cleared",
          "centerY": "viz.val_cleared"
        }
      }
    }, {
      "overrides": {}
    }, {
      "overrides": {}
    });

    /*Adding the Google MLKit Barcode/QR code Scanner component to a Form*/
    /*
    this.view.btnZoomIn.onClick = function()
    {
      this.view.MLKitBCScanner.zoomIn();
    }.bind(this);

    this.view.btnZoomOut.onClick = function()
    {
      this.view.MLKitBCScanner.zoomOut();
    }.bind(this);

    this.view.btnRestart.onClick = function()
    {
      this.view.MLKitBCScanner.restartSession();
    }.bind(this);

    this.view.btnFlash.onClick = function()
    {
      //this.view.MLKitBCScanner.isFlashSuuports();
      this.view.MLKitBCScanner.enableFlash(true);
    }.bind(this);
    */
    
    //property to set the enableContinuousScan
    MLKitBCScanner.enableContinuousScan = false;

    this.view.add(MLKitBCScanner);

    if (this._isiOS) 
    {
      this.view.MLKitBCScanner.codeFormats = [this.MLKBarcodeFormatAll, this.MLKBarcodeFormatQRCode];  
    }
    else if (this._isAndroid) 
    {
      this.view.MLKitBCScanner.codeFormats = [this.BarcodeFormats.FORMAT_ALL_FORMATS, this.BarcodeFormats.FORMAT_UPC_A, this.BarcodeFormats.FORMAT_UPC_E, this.BarcodeFormats.FORMAT_CODE_128, this.BarcodeFormats.FORMAT_CODE_39, this.BarcodeFormats.FORMAT_CODE_93, this.BarcodeFormats.FORMAT_QR_CODE];  
    }

    this.view.MLKitBCScanner.addResultCallback(this.processScan);
  },

  scanCallback: function(data) 
  {
    // To turn off the flashlight after successful scan
    if (data.error.length !== 0) 
    {
      voltmx.print("Error while scanning the codes");
      alert("Error while scanning the codes");
      return;
    }
    else
    {
      var result = delete data.error;
      alert(JSON.stringify(data));
    }
    
    this.view.MLKitBCScanner.stopSession();
  },

  navigateToPreviousForm(navData)
  {
    let prevForm = voltmx.application.getPreviousForm();
    let navObj = new voltmx.mvc.Navigation(prevForm.id);
    navObj.navigate(navData);
  },

  processScan : function(data)
  {
    voltmx.print("##### frmScan.processScan() start");
    
    let self = this;

    let scanMsgA = "Last Scanned Type: " + self.getBCFormatName(data.format);
    let scanMsgB = "Scanned value: " + data.code;
    
    voltmx.print("##### frmScan.processScan() - " + scanMsgA + "; " + scanMsgB);
    
    self.view.lblLastScanType.text = scanMsgA;
    self.view.lblLastScanVal.text = data.code;
        
    self.view.MLKitBCScanner.stopSession();

    let navData = {
      scanValue : data.code
    };

    self.navigateToPreviousForm(navData);

    //self.view.MLKitBCScanner.stopSession();

    //self.resumeScanning();
    //self.showAlertWithHandler(constants.ALERT_TYPE_INFO, "Scan successfully uploaded.", "OK", null, self.view.MLKitBCScanner.restartSession);
    //self.view.MLKitBCScanner.startSession();
    voltmx.print("##### frmScan.processScan() end");
  },

  getBCFormatName : function(codeVal)
  {
    switch (codeVal)
    {
      case 1:
        return "Code 128";
      case 2:
        return "Code 39";
      case 4:
        return "Code 93";
      case 8:
        return "Codabar";
      case 16:
        return "DataMatrix";
      case 32:
        return "EAN 13";
      case 64:
        return "EAN 8";
      case 128:
        return "ITF";
      case 256:
        return "QR Code";
      case 512:
        return "UPC A";
      case 1024:
        return "UPC E";
      case 2048:
        return "PDF 417";
      case 4096:
        return "Aztec";
      case -1:
        return "Unknown";
      default:
        return "Unknown";
    }
  },

  resumeScanning : function()
  {
    //this.view.barcodeqrscanner.resumeScan();
  },

  showAlertWithHandler : function(alertType, alertMsg, lblYes, lblNo, handlerFunc) 
  {
    kony.ui.Alert({
      message: alertMsg,
      alertType: alertType,
      alertTitle: "Barcode Scanner",
      yesLabel: (lblYes === "" ? "Ok" : lblYes),
      /*noLabel: (lblNo === "" ? "Cancel" : lblNo),*/
      alertHandler: handlerFunc
    }, {});
  }

});