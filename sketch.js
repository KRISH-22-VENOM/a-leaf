function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(255);

  // Parameters for the leaf module
  let leafWidth = 50;
  let leafHeight = 100;

  // Draw a single leaf at the center of the canvas
  drawLeaf(width / 2, height / 2, leafWidth, leafHeight);
}

function drawLeaf(x, y, w, h) {
  beginShape();
  fill(34, 139, 34);
  noStroke();
  vertex(x, y - h / 2); // Top point
  bezierVertex(x + w / 2, y - h / 2, x + w / 2, y + h / 2, x, y + h / 2); // Right curve
  bezierVertex(x - w / 2, y + h / 2, x - w / 2, y - h / 2, x, y - h / 2); // Left curve
  endShape(CLOSE);

  // Draw the leaf vein
  stroke(0);
  line(x, y - h / 2, x, y + h / 2);
  for (let i = 0; i < h / 2; i += 20) {
    line(x, y - h / 2 + i, x - w / 4, y - h / 2 + i + 10);
    line(x, y - h / 2 + i, x + w / 4, y - h / 2 + i + 10);
  }
}
