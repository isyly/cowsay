   
const myInfos = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
	text : myInfos ("Sylvain", "La loupe"),
	e : "oO",
	T : "U "
}));

// or cowsay.think()