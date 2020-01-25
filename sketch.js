function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
	textSize(32);
	if(second() === 1) {
		console.log(minute());
	}

	//TODO:
	// make center of inner circles on mouse
	// make larger circle static but inner ones move around

	let radius_hour = map(hour(), 0, 24, 0, 800, true)/2;
	let radius_minute = map(minute(), 0, 60, 0, radius_hour, true)/2;
	let radius_sec = map(second(), 0, 60, 0, radius_minute)/2;
	if(minute() === 0) {
		let radius_sec = map(second(), 0, 60, 0, radius_hour)/2;
	}
	//let hx = map(mouseX,0,width,350,450,true);
	//let hy = map(mouseY,0,height,200,400,true);
	let mx = map(mouseX,0,width, 350, 450, true);
	let my = map(mouseY,0,height, 200, 400, true);

	noFill();
	colorMode(RGB,255,255,255,1);
	strokeWeight(6);

	stroke(255,0,0,0.4);
	ellipse(400, 300, radius_hour, radius_hour);

	stroke(0,0,255,0.4);
	circle(mx, my, radius_minute);

	stroke(255,255,0,0.4);
	circle(mx, my, radius_sec);
	//ellipse(sx, sy, radius_sec, radius_sec);

}
