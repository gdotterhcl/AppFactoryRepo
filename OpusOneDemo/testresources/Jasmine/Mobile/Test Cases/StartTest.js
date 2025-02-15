it("OpusOneDemo/StartTest", async function() {
	var _data = testcaseData_1682087163698.dataset;
	await voltmx.automation.playback.waitFor(["UtilitySelfServ/frmLogin","btnLogin"]);
	voltmx.automation.button.click(["UtilitySelfServ/frmLogin","btnLogin"]);
	await voltmx.automation.playback.waitFor(["UtilitySelfServ/frmHome","btnMyUsage"]);
	voltmx.automation.button.click(["UtilitySelfServ/frmHome","btnMyUsage"]);
	await voltmx.automation.playback.waitFor(["UtilitySelfServ/frmUsage","btnPayBill"]);
	voltmx.automation.button.click(["UtilitySelfServ/frmUsage","btnPayBill"]);
	await voltmx.automation.playback.waitFor(["UtilitySelfServ/frmBillPay","btnPayNow"]);
	voltmx.automation.button.click(["UtilitySelfServ/frmBillPay","btnPayNow"]);
	await voltmx.automation.playback.waitFor(["UtilitySelfServ/frmHome","btnOutage"]);
	voltmx.automation.button.click(["UtilitySelfServ/frmHome","btnOutage"]);
	await voltmx.automation.playback.waitFor(["UtilitySelfServ/frmReportOutage","btnPayBill"]);
	voltmx.automation.button.click(["UtilitySelfServ/frmReportOutage","btnPayBill"]);
});