function AS_Button_id59b6ede92b40ab9d379e4925d5e474(eventobject) {
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
            self.view.lblPayBill.skin = "FooterNameSkinHighlight";
        }, null);
    } else {
        (function() {
            self.view.lblPayBill.skin = "FooterNameSkinHighlight";
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
    self.view.imgMyUsage.src = "recents_inactive.png";
    self.view.imgPayBill.src = "contacts_active.png";
    self.view.imgOutage.src = "keypad_inactive.png";
    self.view.imgContactUs.src = "voicemail_inactive.png";
}