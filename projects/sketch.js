function setup() {
	createCanvas(300, 300);
    r = random(255); 
    g = random(255);
    b = random(255);
}

function draw(){
	background(0);
	translate(width/2, height/2);
//Loop for the 5 flowers
	for (var i = 0; i < 7; i++) {
		push();
		rotate(TWO_PI * i / 7);
		var tx = 200 * noise(0.01*frameCount);
		translate(tx, 7);
        fill(frameCount,r,g,b);
		ellipse (0, 0, 20, 20);
//pedals
		for (var j = 0; j < 6; j++) {
			push();
			rotate(TWO_PI * j / 6);
			var rx = 60 * noise(0.01*frameCount + 20);
        fill(frameCount,r,b);
			ellipse(rx*3, 1, 25, 10);
			pop();
		}		
		translate()
		pop();
	}
}