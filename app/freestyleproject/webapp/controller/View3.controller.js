sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.ust.freestyleproject.controller.View3", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView3")
                .attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {

            var sPoId = oEvent.getParameter("arguments").po_id;

            var oTable = this.byId("poItemsTable");
            var oBinding = oTable.getBinding("items");

            var aFilters = [
                new Filter("po_id", FilterOperator.EQ, sPoId)
            ];

            oBinding.filter(aFilters);
        }

    });
});
