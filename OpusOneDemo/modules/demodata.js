const RMASTATUS = {
  NEW      : "Submitted",
  AWAITRET : "Awaiting Return",
  INPROC   : "In Process",
  INSPECT  : "Inspection",
  REPAIR   : "Repaired",
  REFUND   : "Refunded",
  REPLACE  : "Replaced",
  REJECT   : "Out Warranty"
};

const DEMOCLAIMDATA = [
  {
    imgItem : "microphone2.png",
    lblProductName : "Shure KSM44A",
    lblStatus : {text:RMASTATUS.INSPECT, skin:"lblstatusinproc"},
    lblWarrantyDateVal : "03/09/2025",
    lblClaimNumberVal : "15466892"
  },
  {
    imgItem : "piano.png",
    lblProductName : "Steinway Model B",
    lblStatus : {text:RMASTATUS.INSPECT, skin:"lblstatusinproc"},
    lblWarrantyDateVal : "12/17/2027",
    lblClaimNumberVal : "16784712"
  },
  {
    imgItem : "cable.png",
    lblProductName : "Shure C25J",
    lblStatus : {text:RMASTATUS.REPAIR, skin:"lblstatusrepair"},
    lblWarrantyDateVal : "06/29/2025",
    lblClaimNumberVal : "17092112"
  }
];

const GenerateRMAID = function() {
  let newRMAID = "VMX" + ("" + Math.random()).substring(2, 7);
  
  return newRMAID;
};