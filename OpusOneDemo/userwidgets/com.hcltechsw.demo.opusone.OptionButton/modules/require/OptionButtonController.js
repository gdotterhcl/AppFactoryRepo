define(function() {

  return {
    
    BUTTON : {
      ON : "flxopusoneselecton",
      OFF : "flxopusoneselectoff"
    },
    
    TEXT : {
      ON : "lblboldwhite90",
      OFF : "lblboldblue90"
    },
    
    _isToggled : false,
    
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'isToggled', () => {
        return this._isToggled;
      });
    },

    toggleSelection : function(bOn) 
    {
      this.view.flxOptionButton.skin = ((bOn) ? this.BUTTON.ON : this.BUTTON.OFF);
      this.view.lblButtonText.skin = ((bOn) ? this.TEXT.ON : this.TEXT.OFF);

      //this.view.flxOptionButton.skin = ((this.view.flxOptionButton.skin === this.BUTTON.OFF) ? this.BUTTON.ON : this.BUTTON.OFF);
      //this.view.lblButtonText.skin = ((this.view.lblButtonText.skin === this.TEXT.OFF) ? this.TEXT.ON : this.TEXT.OFF);
      
      this._isToggled = !(this._isToggled);
    }

  };
});