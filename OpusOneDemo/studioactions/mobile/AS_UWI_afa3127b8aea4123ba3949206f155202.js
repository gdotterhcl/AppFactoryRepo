function AS_UWI_afa3127b8aea4123ba3949206f155202(eventobject) {
    var self = this;

    function _ide_onClick_f5a89b1ec5444d28bf65611be695e972_Callback() {
        var ntf = new voltmx.mvc.Navigation("frmClaimNew");
        ntf.navigate();
    }
    self.view.LeftMenu.animate(
    voltmx.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": voltmx.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": _ide_onClick_f5a89b1ec5444d28bf65611be695e972_Callback
    });
}