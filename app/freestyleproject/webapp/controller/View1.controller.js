sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
    "use strict";

    return Controller.extend("com.ust.freestyleproject.controller.View1", {

        onPOHeaderPress: function (oEvent) {

            // Get clicked row
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();

            // Read po_id
            var sPoId = oContext.getProperty("po_id");

            // Navigate to POItems view
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView3", {
                po_id: sPoId
            });
        }

    });
});
