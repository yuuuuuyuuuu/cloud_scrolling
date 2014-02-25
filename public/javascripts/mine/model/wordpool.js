var WordPool = Backbone.Model.extend({

	TAG: "WordPool",

	initialize: function(){
		console.log(this.TAG);
	},

    defaults: {
		"recogStatus" : "Not Set"
	},

	getWordList: function(wordLevel)
	{
		var wordList = new Array();

		wordList.push("Congulaturations");
		wordList.push("Good");
		wordList.push("Get");
		wordList.push("Cat");
		wordList.push("Dog");
		wordList.push("Lion");
		wordList.push("Elephant");
		wordList.push("Obama");
		wordList.push("England");

		return wordList;
	}

});