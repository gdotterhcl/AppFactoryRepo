function AS_Button_ff6dbbfaa0fb4046abb2e7178194c7cc(eventobject) {
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
            self.view.lblOutage.skin = "FooterNameSkinNormal";
        }, null);
    } else {
        (function() {
            self.view.lblOutage.skin = "FooterNameSkinNormal";
        })();
    }
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.lblContactUs.skin = "FooterNameSkinHighlight";
        }, null);
    } else {
        (function() {
            self.view.lblContactUs.skin = "FooterNameSkinHighlight";
        })();
    }
    self.view.ImgHome.src = "favorites_inactive.png";
    self.view.imgMyUsage.src = "recents_inactive.png";
    self.view.imgPayBill.src = "contacts_inactive.png";
    self.view.imgOutage.src = "keypad_inactive.png";
    self.view.imgContactUs.src = "voicemail_active.png";
}