define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },

    clearQRCode : function()
    {
      this.view.imgQRCode.src = "cancel_64.png";  
    }
  };
});