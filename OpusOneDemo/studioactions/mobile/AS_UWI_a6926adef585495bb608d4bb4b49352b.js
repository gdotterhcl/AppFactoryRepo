function AS_UWI_a6926adef585495bb608d4bb4b49352b(eventobject) {
    var self = this;

    function _ide_onClick_id5ddc9fc31f46e7852d695457e122e8_Callback() {
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
        "animationEnd": _ide_onClick_id5ddc9fc31f46e7852d695457e122e8_Callback
    });
}