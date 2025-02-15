define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },

    getBase64Image: function() {
      return this.view.imgAdded.base64;
    },

    resetComponent: function () {
      this.view.imgAdded.base64 = null;
      this.view.flxPhotoContainer.isVisible = false;
      this.view.flxAddPhoto.isVisible = true;
    },

    setBase64Image: function(base64Img) {
      this.view.imgAdded.base64 = base64Img;
      this.view.flxAddPhoto.isVisible = false;
      this.view.flxPhotoContainer.isVisible = true;
    }
  };
});