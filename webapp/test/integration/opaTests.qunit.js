/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"UI5_Assignment_For_Controller/UI5_Assignment_For_Controller/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});