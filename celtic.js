function setup() {
	createCanvas(600, 600);
	background(0);
}

var x = 300;
var y = 300;
var animate = true;

var end = 0;

function draw() {
	background(0);
	var x, y;
	var cx, cy;
	var theta;
	var radius;
	cx = width/2;
	cy = height/2;
	radius = 200;
	theta = 0;
	noFill();
	stroke(199, 176, 232);
	beginShape();
	for(var i = 0; i < end; i ++) {
		x = cx + cos(5 * theta / 7)	* radius * cos(theta);
		y = cy + sin(5 * theta / 7) * radius * cos(theta);
		if(i > 1) {
			vertex(x, y);
		}
		theta += TWO_PI / 200;
	}
	endShape();
	if(end < 2000) {
		end += 1;
	}
	else {
		noLoop();
	}
}