function AS_Button_f1e6ecedb0e64f1298879f66f38b0531(eventobject) {
    var self = this;
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.lblHome.skin = "FooterNameSkinNormal";
        }, null);
    } else {
        (function() {
            self.view.lblHome.skin = "FooterNameSkinNormal";
        })();
    }
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.lblMyUsage.skin = "FooterNameSkinNormal";
        }, null);
    } else {
        (function() {
            self.view.lblMyUsage.skin = "FooterNameSkinNormal";
        })();
    }
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.lblPayBill.skin = "FooterNameSkinNormal";
        }, null);
    } else {
        (function() {
            self.view.lblPayBill.skin = "FooterNameSkinNormal";
        })();
    }
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.lblOutage.skin = "FooterNameSkinHighlight";
        }, null);
    } else {
        (function() {
            self.view.lblOutage.skin = "FooterNameSkinHighlight";
        })();
    }
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.lblContactUs.skin = "FooterNameSkinNormal";
        }, null);
    } else {
        (function() {
            self.view.lblContactUs.skin = "FooterNameSkinNormal";
        })();
    }
    self.view.ImgHome.src = "favorites_inactive.png";
    self.view.imgMyUsage.src = "recents_inactive.png";
    self.view.imgPayBill.src = "contacts_inactive.png";
    self.view.imgOutage.src = "keypad_active.png";
    self.view.imgContactUs.src = "voicemail_inactive.png";
}