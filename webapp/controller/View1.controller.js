sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.Calender.controller.View1", {
		onInit: function () {
			var fullCalenderData = [{
					title: "Room-1",
					start: "2019-11-01T09:00:00",
					end: "2019-11-01T18:00:00"
				}, {
					title: "Room-2",
					start: "2019-11-02T16:00:00",
					end: "2019-11-02T19:00:00"
				}, {
					title: "Room-3",
					start: "2019-11-03T12:00:00",
					end: "2019-11-03T14:00:00"
				}, {
					title: "Room-4",
					start: "2019-11-04T16:00:00",
					end: "2019-11-04T19:00:00"
				}
			];
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(fullCalenderData);
			this.getView().setModel(oModel, "fullCalenderData");
		}
	});
});