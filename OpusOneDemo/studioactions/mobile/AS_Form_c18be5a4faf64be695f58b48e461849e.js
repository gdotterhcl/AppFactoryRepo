function AS_Form_c18be5a4faf64be695f58b48e461849e(eventobject) {
    var self = this;
    if (self.isLoginDisplayed === false) {
        self.fadeInLogo.call(this);
    } else {
        self.animateClouds.call(this);
    }
}