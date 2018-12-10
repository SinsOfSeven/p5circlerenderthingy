var n = 0;
var c = 5;
var s = 15;
var w = 0;
var d = 137+(Math.random());
var f = 0;
var g = 0;
function setF() {

	var diceRoll = Math.floor(Math.random()*4)+1;

	if(diceRoll==1){
		f = 32;
	}
	else if(diceRoll==2){
		f = 64;
	}
	else if(diceRoll==3){
		f = 128;
	}
	else if(diceRoll==4){
		f = 256;
	}
}
setF();

function setup() {
	createCanvas(windowWidth,windowHeight);
	angleMode(DEGREES);
	if(Math.random()>0.5)
		colorMode(RGB);
	else
		colorMode(HSB);
	background(0);
}


function cDie() {
	return (w + Math.floor(Math.random()*f));
}

console.log(d);
console.log(f);

function draw() {
	if(n<2560*10){
	for(i = 0; i < 2560; i++){
	w = n + w; 
	var a = n * d;
	var r = c * sqrt(n);

	var pos = 2;
	var x = r * cos(a)+(width/pos);
	var y = r * sin(a)+(height/pos);

	if(f == 32){
		let u = ((x/2)+256);
		var r = (cDie() % u);
		var g = (cDie() % u);
		var b = (cDie() % u);
	}
	else if(f == 64){
		let u = (y/2-256);
		var r = (cDie() % u);
		var g = (cDie() % u);
		var b = (cDie() % u);
	}
	else if(f == 128){
		let u = (256%(r/6));
		var r = (cDie() % u);
		var g = (cDie() % u);
		var b = (cDie() % u);
	}
	else{
		let u = (256);
		var r = (cDie() % ((Math.floor(Math.random()*r)+x)%u));
		var g = (cDie() % ((Math.floor(Math.random()*r)+y)%u));
		var b = (cDie() % ((Math.floor(Math.random()*r)+x+y)%u));
	}
	//var h = cDie() % 256;
	noStroke();
	//stroke(0);
	fill(r, g, b);
	//fill(h, 255, 255);
	ellipse(x,y,s,s);
	n++;
	}
	}
	//console.log(n);
}
