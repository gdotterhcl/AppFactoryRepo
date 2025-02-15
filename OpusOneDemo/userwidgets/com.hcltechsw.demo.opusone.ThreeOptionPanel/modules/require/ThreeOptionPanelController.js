define(function() {

  return {
    _selectedOption : 0,

    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'selectedValue', () => {
        return this._selectedValue;
      });
      defineSetter(this, 'selectedValue', value => {
        this._selectedValue = value;
      });
    },

    toggleOption : function(newOption)
    {
      if (newOption !== this._selectedOption)
      {
        switch (newOption)
        {
          case 1:
            this.view.OptionButton1.toggleSelection(true);
            this.view.OptionButton2.toggleSelection(false);
            this.view.OptionButton3.toggleSelection(false);
            break;
          case 2:
            this.view.OptionButton1.toggleSelection(false);
            this.view.OptionButton2.toggleSelection(true);
            this.view.OptionButton3.toggleSelection(false);
            break;
          case 3:
            this.view.OptionButton1.toggleSelection(false);
            this.view.OptionButton2.toggleSelection(false);
            this.view.OptionButton3.toggleSelection(true);
            break;
          default:
            break;
        }
      }
    }
  };
});