sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("test.Calender.control.fullCalanderCustomControl", {
		metadata: {
			properties: {
				items: {
					type: "json",
					defaultValue: []
				},
				controlHeightMonth: {
					type: "string",
					defaultValue: "5.25em"
				},
				controlHeighTime: {
					type: "string",
					defaultValue: "2.48em"
				},
				controlWidth: {
					type: "string",
					defaultValue: "70%"
				},
			},
			aggregations: {},
			events: {}
		},
		init: function () {

		},

		renderer: function (oRM, oControl) {
			oRM.write("<style> .fc-basic-view .fc-body .fc-row { height:" + oControl.getControlHeightMonth() + "!important; }</style>");
			oRM.write("<style>.fc-time-grid .fc-slats td { height:" + oControl.getControlHeighTime() + "; border-bottom: 0 }</style>");
			oRM.write("<div id='calendar' style='width:" + oControl.getControlWidth() + ";'></div>");
			$(document).ready(function () {
				initThemeChooser({
					init: function (themeSystem) {
						$("#calendar").fullCalendar({
							themeSystem: themeSystem,
							header: {
								left: "prev,next",
								center: "title",
								right: "month,agendaWeek"
							},
							defaultDate: new Date().setDate(new Date().getDate() + 0),
							weekNumbers: false,
							navLinks: true,
							editable: false,
							eventLimit: true,
							minTime: "00:00:00",
							maxTime: "24:00:01",
							slotDuration: "02:0:01",
							events: oControl.getItems()
						});
					}
				});
			});
		},

		onAfterRendering: function (evt) {

		}
	});
});