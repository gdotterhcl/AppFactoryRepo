define(function() {

  return {

    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
    },

    createDemoData : function(latVal, lonVal)
    {
      voltmx.print("##### frmUPS.createDemoData() start.");

      let meMapData = {
        lat : latVal,
        lon : lonVal,
        name : "Your Location",
        desc:  this.view.SearchUsingLocation.cityState,
        image: IMAGES.MAPS.BLUE,
        calloutData : {"imgPin" : {src:IMAGES.MAPS.BLUE},
                       "lblName":"Your Location",
                       "lblCityState": this.view.SearchUsingLocation.cityState,
                       "imgDismiss": {src: IMAGES.DISMISS},
                       "template":"flxMapHomePadding"},
        showCallout : true
      };

      var strikeData = generateRandomPoints({"lat": parseFloat(meMapData.lat), "lon" : parseFloat(meMapData.lon)}, 15000, 7);
      var allMapData = [meMapData];
      var currMapPoint;
      var newMapPoint;

      for (var j = 0; j < strikeData.length; j++)
      {
        currMapPoint = strikeData[j];

        voltmx.print("##### Adding strike point: " + JSON.stringify(currMapPoint));

        newMapPoint = {
          lat : currMapPoint.lat.toString(),
          lon : currMapPoint.lon.toString(),
          name : "UPS Location",
          desc : "Near Auburn, GA",
          image : IMAGES.MAPS.UPS,
          calloutData : {"imgPin" : {src:IMAGES.MAPS.UPS},
                         "lblName":"The UPS Store",
                         "lblCityState": "Near Auburn, GA",
                         "imgDismiss": {src: IMAGES.DISMISS},
                         "template":"flxMapCalloutPadding"},
          showCallout : true
        };

        allMapData.push(newMapPoint); 
      }

      this.view.MapPanel.currentMapData = allMapData;

      dismissLoadingScreen();

      voltmx.print("##### frmUPS.createDemoData() end.");
    }

  };
});