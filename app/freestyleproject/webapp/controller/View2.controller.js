sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller,UIComponent) => {
    "use strict";

    return Controller.extend("com.ust.freestyleproject.controller.View2", {
        onInit() {
        },
        press: function() {
          // Handle press event
          var ab= UIComponent.getRouterFor(this);
          ab.navTo("RouteView2");
        },
        press2: function() {
          // Handle press event
          var ab= UIComponent.getRouterFor(this);
          ab.navTo("RouteView4");
        },
        press3: function() {
          // Handle press event
          var ab= UIComponent.getRouterFor(this);
          ab.navTo("RouteView5");
        }
    });
});