function AS_UWI_b65cdab5d78c4823b5f71058eaab3530(eventobject) {
    var self = this;

    function _ide_onCloseClick_i64cfbc916344ec09e4f4ec803d6110d_Callback() {}
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
        "animationEnd": _ide_onCloseClick_i64cfbc916344ec09e4f4ec803d6110d_Callback
    });
}