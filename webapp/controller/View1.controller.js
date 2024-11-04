sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("sap.btp.helloworld.controller.View1", {
        onInit: function () {
        },
        onPress: function () {
            // debugger;
            MessageBox.alert("Hi!");
        }
    });
});
