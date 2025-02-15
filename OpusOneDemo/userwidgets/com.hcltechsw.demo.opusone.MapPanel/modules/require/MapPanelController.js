define(function() {

  return {

    _homePointSet : false,
    _currentMapData : [],

    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'isHomePointSet', function () {
        try {
          return this._homePointSet;
        } catch (e) {
          alert(JSON.stringify(e));
        }
      });
      defineGetter(this, 'currentMapData', function () {
        try {
          return this._currentMapData;
        } catch (e) {
          alert(JSON.stringify(e));
        }
      });
      defineSetter(this, 'currentMapData', function (val) {
        try 
        {
          this._currentMapData = val;
          this.view.mapMain.clear();
          this.view.mapMain.locationData = val;  
        } 
        catch (e) 
        {
          alert(JSON.stringify(e));
        }
      });
    },
    
    setHomePoint : function(latVal, lonVal)
    {
      voltmx.print("##### MapPanel.createHomePoint() start.");

      if (this._homePointSet === false)
      {
        this.view.mapMain.widgetDataMapForCallout = {
          "imgPin"      : "imgPin",
          "lblName"     : "lblName",
          "lblCityState": "lblCityState",
          "imgDismiss"  : "imgDismiss"
        };

        let meMapData = {
          lat : latVal,
          lon : lonVal,
          name : "Your Location",
          desc:  latVal + ", " + lonVal,
          image: IMAGES.MAPS.BLUE,
          calloutData : {"imgPin"      : {src: IMAGES.MAPS.BLUE},
                         "lblName"     : "Your Location",
                         "lblCityState": latVal + ", " + lonVal,
                         "imgDismiss"  : {src: IMAGES.DISMISS},
                         "template"    : "flxMapHomePadding"},
          showCallout : true
        };

        this.view.mapMain.locationData = [meMapData];
        
        this._homePointSet = true;
      }

      voltmx.print("##### MapPanel.createHomePoint() end.");
    }

  };
});