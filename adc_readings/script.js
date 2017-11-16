$(document).ready(function() {
	get_adc_readings();
});

function get_adc_readings() {
	var ts_channel = "364994";
	var url = "https://api.thingspeak.com/channels/"+ts_channel+"/feeds/last.json?callback=";
	$.ajax({
		url: url+"render_page",
		dataType: "jsonp",
		jsonpCallback: "render_page",
		jsonp: "callback"
	});
}

function render_page(data) {
	$("#channel0").text(data["field1"]+" V");
	$("#channel1").text(data["field2"]+" V");
	$("#channel2").text(data["field3"]+" V");
	$("#channel3").text(data["field4"]+" V");

	setTimeout(get_adc_readings, 3000);
}
