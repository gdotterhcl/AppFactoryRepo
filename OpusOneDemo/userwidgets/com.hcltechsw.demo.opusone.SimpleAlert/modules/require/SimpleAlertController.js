define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) 
    {
      this.view.flxBackground.onClick = () => this.view.isVisible = false;
      this.view.buttonClose.onButtonClicked = () => this.view.isVisible = false;
    },
    
    //Logic for getters/setters of custom properties
    initGettersSetters: function() 
    {

    },

    show({title, text}) 
    {
      this.view.lblTitle.text = title;
      this.view.lblText.text = text;
      this.view.isVisible = true;
    }
  };
});