//import Game from "./utils/index.js";
//import Logic from "./test/index.js";

//window.Game = Game;


var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("hello");
console.log(url_string, c);