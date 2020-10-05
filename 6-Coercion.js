//coercion implicita
var a = 1 + "2";
console.log(typeof a);

var b = 4 * "2";
console.log(typeof b);


//coercion explicita
var c = 15;
var d = c + ""; //conversion de numero a String


var d = String(c);

var e = Number(d);