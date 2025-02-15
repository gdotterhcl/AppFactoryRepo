function AS_UWI_d178d2121a944dae982769ef43855b4d(eventobject) {
    var self = this;
    voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    self.createDemoData.call(this, self.view.SearchUsingLocation.latitude, self.view.SearchUsingLocation.longitude);
}