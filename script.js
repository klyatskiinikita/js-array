var input = document.getElementById("input");
var output = document.getElementById("output");
var array = [];

function generate() {
	array = Array(10).fill().map(() => Math.round(Math.random() * 200 - 100))
	input.innerHTML = array;
}

function calculate() {
	array = array.map(x => x < 0 ? 0 : x);
	output.innerHTML = array;
}