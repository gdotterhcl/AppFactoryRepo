define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if (!this.initDone)
        {
          this.view.onClick = () => {
            this.onButtonClicked();
          };
          
          this.initDone = true;
        }
      };
    },

    initGettersSetters(){},

    onButtonClicked(){}
  };
});