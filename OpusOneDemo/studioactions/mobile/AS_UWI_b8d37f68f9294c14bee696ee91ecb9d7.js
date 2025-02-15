function AS_UWI_b8d37f68f9294c14bee696ee91ecb9d7(eventobject) {
    var self = this;

    function _ide_onCloseClick_efea60e2901b42dd88f02e22356ff86e_Callback() {}
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
        "animationEnd": _ide_onCloseClick_efea60e2901b42dd88f02e22356ff86e_Callback
    });
}