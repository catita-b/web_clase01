var d; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  frameRate(100);  
}

function draw() {
  d = random (10,100);
  noStroke();
  fill(255,d);
  ellipse (mouseX, mouseY ,d,d);
}
