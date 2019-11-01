sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (jQuery, Controller, JSONModel) {
	"use strict";
	var PageController = Controller.extend("sap.m.sample.Select2Columns.Page", {
/*	return Controller.extend("UI5_Assignment_For_Controller.UI5_Assignment_For_Controller.controller.View1", { */
		onInit: function () {
			var oData = {
				"LanguageCollection": [
					{
						"Language": "English        "					},
					{
						"Language": "Hindi          "					},
					{
						"Language": "Marathi        "					},
					{
						"Language": "Gujarati       "					}
				]
			};

			// set explored app's demo model on this sample
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		}
	});
	return PageController;
});

