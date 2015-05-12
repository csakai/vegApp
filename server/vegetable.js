var mongoose = require("mongoose");
var vegetableSchema = new mongoose.Scehma({
	imageurl: {type: String, unique: true, required: true},
	type: { type: String, required: true},
	name: {type: String},
	occupation: {type: String},
	superpower: {type: String}
})

var Vegetable = mongoose.model("Vegetable", VegetableSchema);