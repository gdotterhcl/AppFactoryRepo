define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },

    getClaims : function()
    {
      voltmx.print("##### ClaimsListController.getClaims() start");

      let self = this;

      let vmxClient = voltmx.sdk.getDefaultInstance();

      function getClaimsSuccess(claims)
      {
        voltmx.print("##### ClaimsListController.getClaimsSuccess() start");

        if (claims !== null && claims !== undefined && claims.opstatus === 0)
        {
          let sortedClaims = claims.records[0].RMAClaims;
          sortedClaims.sort(function(a, b){return new Date(b.LastModifiedDate) - new Date(a.LastModifiedDate);});
          
          let claimsData = [];

          sortedClaims.forEach((claim) => {
            claimsData.push({
              imgItem            : {src:claim.ProdImgURL},
              lblProductName     : {text:claim.ProductName},
              lblStatus          : {text:claim.Status, skin:self.getStatusSkin(claim.Status)},
              lblWarrantyDate    : {text:"Warranty Date:"},
              lblWarrantyDateVal : {text:formatDBDateForApp(claim.WarrantyEndDate)},
              lblClaimNumber     : {text:"Claim Number:"},
              lblClaimNumberVal  : {text:claim.RMAID}
            });
          });

          self.view.segClaimList.isVisible = false;
          self.view.segClaimList.removeAll();
          
          self.view.segClaimList.setData(claimsData);
          self.view.segClaimList.isVisible = true;
        }

        voltmx.print("##### ClaimsListController.getClaimsSuccess() end");
      }

      function getClaimsFailure(errmsg)
      {
        voltmx.print("##### ClaimsListController.getClaimsError() received error: " + JSON.stringify(errmsg));
      }

      try
      {
        const claimObjSvc = vmxClient.getObjectService(SERVICES.OBJ.RMA);
        const claimObj = new voltmx.sdk.dto.DataObject(DATAOBJ.RMA);

        claimObjSvc.fetch({"dataObject":claimObj}, getClaimsSuccess, getClaimsFailure);
      }
      catch (exc)
      {
        voltmx.print("##### ClaimsListController.getClaims() received error: " + JSON.stringify(exc));
      }

      voltmx.print("##### ClaimsListController.getClaims() end");
    },

    getStatusSkin : function(statusVal)
    {
      let retSkinName = "defLabel";

      switch(statusVal)
      {
        case RMASTATUS.NEW:
          retSkinName = SKINS.STATUS.NEW;
          break;
        case RMASTATUS.INPROC:
          retSkinName = SKINS.STATUS.INPROC;
          break;
        case RMASTATUS.INSPECT:
          retSkinName = SKINS.STATUS.INSPECT;
          break;
        case RMASTATUS.REPAIR:
          retSkinName = SKINS.STATUS.REPAIR;
          break;
        case RMASTATUS.REFUND:
          retSkinName = SKINS.STATUS.REFUND;
          break;
        case RMASTATUS.REPLACE:
          retSkinName = SKINS.STATUS.REPLACE;
          break;
        case RMASTATUS.REJECT:
          retSkinName = SKINS.STATUS.REJECT;
          break;
        default:
          retSkinName = SKINS.STATUS.INPROC;
          break;
      }
      
      return retSkinName;
    }
  };
});