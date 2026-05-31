function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20, 20, 40);

  noStroke();
  fill(30, 60, 80);
  circle(0, 400, 700);

  fill(60, 40, 100);
  circle(0, 400, 500);

  fill(100, 50, 100);
  circle(0, 400, 300);

  fill(255, 255, 255);
  circle(450, 50, 2);
  circle(550, 150, 3);
  circle(300, 30, 2);
  circle(500, 250, 2);
  circle(350, 350, 3);
  circle(100, 50, 2);

  fill(0, 200, 200);
  rect(100, 0, 10, 400);

  fill(150, 50, 200);
  rect(120, 50, 5, 300);

  fill(255, 100, 0);
  triangle(400, 100, 550, 150, 450, 250);

  fill(200, 50, 0);
  triangle(410, 110, 560, 160, 460, 260);

  stroke(200, 200, 200);
  strokeWeight(1);
  line(0, 0, 600, 400);
  line(600, 0, 0, 400);

  noStroke();
  fill(240, 220, 170);
  ellipse(250, 150, 120, 15);

  noStroke();
  fill(160, 80, 40);
  arc(500, 300, 80, 80, radians(110), radians(80));

  stroke(0, 255, 255);
  strokeWeight(2);
  noFill();
  rect(480, 280, 100, 70);
}
