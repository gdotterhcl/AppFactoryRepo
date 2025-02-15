define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'selectedTab', () => {
                return this._selectedTab;
            });
            defineSetter(this, 'selectedTab', value => {
                this._selectedTab = value;
            });
        }
	};
});