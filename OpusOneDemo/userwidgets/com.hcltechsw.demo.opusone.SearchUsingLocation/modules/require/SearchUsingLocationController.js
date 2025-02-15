define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },

    _mapAPIKey : "",

    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'latitude', () => {
        return this.currLat;
      });
      defineGetter(this, 'longitude', () => {
        return this.currLong;
      });
      defineGetter(this, 'cityState', () => {
        return this.currLong;
      });
      defineGetter(this, 'mapAPIKey', () => {
        return this._mapAPIKey;
      });
      defineSetter(this, 'mapAPIKey', value => {
        this._mapAPIKey = value;
      });
    },

    currLat : "",
    currLong : "",
    currCityState : "",

    // Use Google Maps or other mapping service
    GOOGMAPS : "googleMaps",
    GETZIPFROMLATLNG : "getZipCodeFromLatLong",
    GPSDEFAULTDATA : {
      LAT  : "37.8434549862806",
      LONG : "-122.28791051851283"
    },

    onLocationReceived(lat, lon){},

    getLatLongFromCurrLoc : function(isRefresh)
    {
      voltmx.print("####### SearchUsingLocation.getLatLongFromCurrLoc() start");

      let self = this;

      function getCurrLocSuccess(positionData)
      {
        self.currLat = positionData.coords.latitude.toString();
        self.currLong = positionData.coords.longitude.toString();

        self.onLocationReceived(self.currLat, self.currLong);

        voltmx.print("####### SearchUsingLocation.getLatLongFromCurrLoc() - GPS Data received: " + self.currLat + ", " + self.currLong);

        if (isRefresh === false)
        {
          self.getZipCodeFromGps();
        }
      }

      function getCurrLocFailure(errorDetail)
      {
        let errStr = JSON.stringify(errorDetail);

        voltmx.print("####### SearchUsingLocation.getLatLongFromCurrLoc() GPS error, will use default.  Error: " + errStr);

        self.currLat = self.GPSDEFAULTDATA.LAT;
        self.currLong = self.GPSDEFAULTDATA.LONG;

        if (isRefresh === false)
        {
          self.getZipCodeFromGps();
        }
      }

      voltmx.print("####### SearchUsingLocation.getLatLongFromCurrLoc() calling native GPS function.");

      let positionoptions = {};

      voltmx.location.getCurrentPosition(getCurrLocSuccess, getCurrLocFailure, positionoptions);

      voltmx.print("####### SearchUsingLocation.getLatLongFromCurrLoc() end");
    },

    getZipCodeFromGps : function()
    {
      voltmx.print("####### SearchUsingLocation.getZipCodeFromGps() start ");  

      let self = this;
      let voltmxsdk = null;

      // service callback success
      function getZipSuccess(response)
      {
        voltmx.print("####### SearchUsingLocation.getZipCodeFromGps().getZipSuccess() start");

        try
        {
          if (response !== null && response.opstatus === 0)
          {
            self.currCityState = response.city + ", " + response.state;
            self.view.txtEntryValue.text = self.currCityState + " " + response.postalCode;
          }
          
          dismissLoadingScreen();
        }
        catch (exception)
        {
          voltmx.print("Error processing map data: \r\n" + exception.message + "\r\n\r\nAt: \r\n" + exception.stack);

          throw exception;       
        }

        voltmx.print("####### SearchUsingLocation.getZipCodeFromGps().getZipSuccess() end");
      }

      // service callback failure
      function getZipError(errmsg)
      {
        voltmx.print("####### SearchUsingLocation.getZipCodeFromGps().getZipError() start");

        dismissLoadingScreen();

        let alertMsg = "There was an issue getting map data: " + JSON.stringify(errmsg);

        alert(alertMsg);   

        voltmx.print("####### SearchUsingLocation.getZipCodeFromGps().getZipError() end");
      }

      try
      {
        if (!voltmxsdk)
        {
          voltmxsdk = voltmx.sdk.getDefaultInstance();
        }

        // Prepare headers
        let svcInputHdrs = {};

        // Prepare params
        let svcInputParms = {
          latitude  : self.currLat,
          longitude : self.currLong,
          apiKey    : self._mapAPIKey
        };

        let getZipCodeFromLatLong_inputparam = {};

        let mapService = voltmxsdk.getIntegrationService(self.GOOGMAPS);

        voltmx.print("####### SearchUsingLocation.getZipCodeFromGps() calling service " + self.GOOGMAPS);

        mapService.invokeOperation(self.GETZIPFROMLATLNG, svcInputHdrs, svcInputParms, getZipSuccess, getZipError);
      }
      catch (exception)
      {
        dismissLoadingScreen();
        let alertMsg = "There was an error calling the map service: \r\n" + exception.message + "\r\n\r\nAt: \r\n" + exception.stack;
        alert(alertMsg);      
      }

      voltmx.print("####### SearchUsingLocation.getZipCodeFromGps() end");  
    }
  };
});