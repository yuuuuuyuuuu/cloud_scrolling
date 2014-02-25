$(document).ready(function(){
	console.log("document.ready");

	var app = $("#app");
	var mainView = new MainView({el:app ,model: webSpeechApiModel});

});