function AS_UWI_ha35f156996f4dd894668770f01997f2(eventobject) {
    var self = this;

    function _ide_onClick_i594e74a1b8b48e7a29834a1b9478ab4_Callback() {
        var ntf = new voltmx.mvc.Navigation("frmClaimList");
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
        "animationEnd": _ide_onClick_i594e74a1b8b48e7a29834a1b9478ab4_Callback
    });
}