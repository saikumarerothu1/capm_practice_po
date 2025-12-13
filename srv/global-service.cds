using po.ust from '../db/schema';

service globalservice {
    @Common.Label: 'Vendors'
    entity Vendors        as projection on ust.vendormaster;

    @Common.Label: 'Materials'
    entity Materials      as projection on ust.mastermaterial;

    @Common.Label: 'Purchase Order Header'
    entity POHeaders      as projection on ust.poheader;

    @Common.Label: 'Purchase Order Items'
    entity POItems        as projection on ust.poitem;

    @Common.Label: 'Goods Receipt Header'
    entity GRHeaders      as projection on ust.gr_header;

    @Common.Label: 'Goods Receipt Items'
    entity GRItems        as projection on ust.gr_item;

    @Common.Label: 'Invoice Header'
    entity InvoiceHeaders as projection on ust.inv_header;

    @Common.Label: 'Invoice Items'
    entity InvoiceItems   as projection on ust.inv_item;

    @Common.Label: 'PO Audit Log'
    entity POAudits   as projection on ust.audit;
}
