define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'rmaId', () => {
        return this._rmaId;
      });
      defineSetter(this, 'rmaId', value => {
        this._rmaId = value;
        this.view.TitleSubtitleMessagePanel.textMessage = 'Your RMA (return merchandise authorization) has been created. Your RMA ID is: <b>' + value + '</b>. Details have been emailed to you for your records. Bring the product to any UPS and show them the following QR code. From there, UPS will pack and ship your item for you.';
      });
      defineGetter(this, 'shippingAddress', () => {
        return this._shippingAddress;
      });
      defineSetter(this, 'shippingAddress', value => {
        this._shippingAddress = value;
        this.generateQRCode(value);
      });
    },
    
    generateQRCode : function(address)
    {
      let addresscode = address.replace(" ", "+");
      this.view.QRCodeImage.src = "https://barcode.tec-it.com/barcode.ashx?data=" + addresscode + "&code=MobileQRCode&imagetype=Png&eclevel=L";
    }
  };
});