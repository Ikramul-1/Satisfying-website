function setup() {
				createCanvas(windowWidth, windowHeight, WEBGL);
				background(0);
}

let rand1, rand, col, y, x, y1, x1, size;

function draw() {
				if(mouseIsPressed) {
								background(0);
				}
				
				rand1 = random(60, 300);
				rand = random(60, 300);
				col = random(60, 300);
				y = random(-800, 800);
				x = random(-600, 600);
				y1 = random(-800, 800);
				x1 = random(-600, 600);
				size = random(50, 160);
				fill(rand1 - 20, col + 25, rand + 25, size + 70);
				
				strokeWeight(30);
				stroke(150, 80);
				ellipse(x, y, size, size);
				fill(rand + 10, rand1 + 40, col + 40, size + 100);
				ellipse(x1, y1, size, size);
				
}
