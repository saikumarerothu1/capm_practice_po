const cds = require('@sap/cds');
module.exports= cds.service.impl(async function() {
  const {POHeaders, POItems} = this.entities;
  this.before('CREATE',POHeaders,async (req)=>{
    if(!req.data.po_number){
        req.error(403,'Purchase order number is required.');
    }
    if(!req.data.vendor){
        req.error(403,'Vendor is required.');
    }
  });
});