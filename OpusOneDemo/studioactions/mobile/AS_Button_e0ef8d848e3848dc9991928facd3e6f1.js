function AS_Button_e0ef8d848e3848dc9991928facd3e6f1(eventobject) {
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
            self.view.lblMyUsage.skin = "FooterNameSkinHighlight";
        }, null);
    } else {
        (function() {
            self.view.lblMyUsage.skin = "FooterNameSkinHighlight";
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
            self.view.lblOutage.skin = "FooterNameSkinNormal";
        }, null);
    } else {
        (function() {
            self.view.lblOutage.skin = "FooterNameSkinNormal";
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
    self.view.imgMyUsage.src = "recents_active.png";
    self.view.imgPayBill.src = "contacts_inactive.png";
    self.view.imgOutage.src = "keypad_inactive.png";
    self.view.imgContactUs.src = "voicemail_inactive.png";
}