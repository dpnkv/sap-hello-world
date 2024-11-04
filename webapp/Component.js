/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sap/btp/helloworld/model/models",
        "sap/base/Log"
    ],
    function (UIComponent, Device, models, Log) {
        "use strict";

        return UIComponent.extend("sap.btp.helloworld.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // Log.info("Hello-World Information Log");
                // Log.debug("Hello-World Debug Log");
                // Log.warning("Hello-World Warning Log");
                // Log.error("Hello-World Error Log");
                // Log.fatal("Hello-World Fatal Log");

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);