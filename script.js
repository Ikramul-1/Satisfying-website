function setup() {
				createCanvas(windowWidth, windowHeight);
				background(0);
}

let rand1, rand, col, size;

function draw() {
				rand1 = random(60, 240);
				rand = random(60, 240);
				col = random(60, 240);
				size = random(50, 120);
				size2 = random(65, 120);
				if(mouseIsPressed) {
								fill(rand1 + 30, col + 35, rand + 30, size);
								noStroke();
								ellipse(mouseX, mouseY, size2, size2);
				}
				
}
