define({ 

  //Type your controller code here 
  getClaims : function()
  {
    voltmx.print("##### frmRMA.getClaims() start");

    let self = this;

    let vmxClient = voltmx.sdk.getDefaultInstance();

    function getClaimsSuccess(claims)
    {
      voltmx.print("##### frmRMA.getClaimsSuccess() start");

      if (claims !== null && claims !== undefined && claims.opstatus === 0)
      {
        let sortedClaims = claims.records[0].RMAClaims;
        sortedClaims.sort(function(a, b){return new Date(b.LastModifiedDate) - new Date(a.LastModifiedDate);});

        let claimsData = [];

        sortedClaims.forEach((claim) => {
          claimsData.push({
            imgItem            : claim.ProdImgURL,
            lblProductName     : {text:claim.ProductName},
            lblStatus          : {text:claim.Status, skin:self.getStatusSkin(claim.Status)},
            lblWarrantyDate    : {text:"Warranty Date"},
            lblWarrantyDateVal : {text:formatDBDateForApp(claim.WarrantyEndDate)},
            lblClaimNumber     : {text:"Claim Number"},
            lblClaimNumberVal  : {text:claim.RMAID}
          });
        });

        self.view.flxRMAList.removeAll();

        for(cnt = 0; cnt < claimsData.length; cnt++)  
        {
          var RMAEntry = claimsData[cnt];
          var RMACard = new com.hcltechsw.demo.opusone.RMACard( {
            "clipBounds" : true,
            "id"         : "RMACard" + cnt,
            "isVisible"  : true,
            "left"       : (cnt % 2) === 1 ? "52%" : "0%",
            "height"     : "128px",
            "width"      : "48%",
            "top"        : ((cnt < 2) ? 0 : (Math.floor(cnt/2) * 148)) + "px",   // (Math.floor(cnt/2) * 128) + ((cnt < 2) ? 0 : 20) + "px",
            "zIndex"     : 1
          }, {}, {});

          RMACard.itemSrc        = RMAEntry.imgItem;
          RMACard.itemName       = RMAEntry.lblProductName.text;
          RMACard.itemStatus     = RMAEntry.lblStatus.text;
          RMACard.itemWarDate    = RMAEntry.lblWarrantyDateVal.text;
          RMACard.itemClaim      = RMAEntry.lblClaimNumberVal.text;
          RMACard.itemStatusSkin = RMAEntry.lblStatus.skin;

          self.view.flxRMAList.add(RMACard);
        }
      }

      voltmx.print("##### frmRMA.getClaimsSuccess() end");
    }

    function getClaimsFailure(errmsg)
    {
      voltmx.print("##### frmRMA.getClaimsError() received error: " + JSON.stringify(errmsg));
    }

    try
    {
      const claimObjSvc = vmxClient.getObjectService(SERVICES.OBJ.RMA);
      const claimObj = new voltmx.sdk.dto.DataObject(DATAOBJ.RMA);

      //self.view.segClaimList.removeAll();

      claimObjSvc.fetch({"dataObject":claimObj}, getClaimsSuccess, getClaimsFailure);
    }
    catch (exc)
    {
      voltmx.print("##### frmRMA.getClaims() received error: " + JSON.stringify(exc));
    }

    voltmx.print("##### frmRMA.getClaims() end");
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

});