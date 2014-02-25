var WordManager = Backbone.Model.extend({

	TAG: "WordManager",

	initialize: function(){
		console.log(this.TAG);
	},

    defaults: {
		"recogStatus" : "Not Set",
		"recogText" : "Not Set",
		"isContinuous" : false,
		"lang" : "ja",
	},

	addNewWord: function(newString)
	{

	},

	deleteWord: function(targetWord)
	{

	},

	onRecogEnd: function(event)
	{
		console.log("onRecogEnd");
		console.log(event);

		this.set("recogStatus", event.type);
	}

});