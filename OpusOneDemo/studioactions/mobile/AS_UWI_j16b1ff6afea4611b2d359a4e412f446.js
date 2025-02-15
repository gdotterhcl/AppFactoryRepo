function AS_UWI_j16b1ff6afea4611b2d359a4e412f446(eventobject) {
    var self = this;

    function _ide_onClick_e9287612e2f04beeb436785c1e1f96ac_Callback() {
        var ntf = new voltmx.mvc.Navigation("frmLogin");
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
        "animationEnd": _ide_onClick_e9287612e2f04beeb436785c1e1f96ac_Callback
    });
}