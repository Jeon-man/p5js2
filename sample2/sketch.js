let charX = 300;
let charY = 200;
let hairColor = 40;
let eyeH = 30;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245);

  noStroke();
  fill(80, 100, 140);
  rect(charX - 150, charY + 120, 300, 80);

  stroke(0);
  strokeWeight(3);
  fill(250, 220, 190);
  ellipse(charX - 25, charY + 90, 70, 70);
  ellipse(charX + 25, charY + 90, 70, 70);
  ellipse(charX, charY + 10, 200, 200);

  noFill();
  stroke(210, 170, 140);
  strokeWeight(2);
  arc(charX, charY + 105, 15, 15, 0, PI);

  fill(hairColor);
  noStroke();
  arc(charX, charY, 210, 190, PI, 0);

  stroke(0);
  strokeWeight(2.5);
  fill(255);
  ellipse(charX - 40, charY + 15, 50, eyeH);
  ellipse(charX + 40, charY + 15, 50, eyeH);

  let pupilX = 0;
  let pupilY = 0;

  fill(60, 40, 20);
  noStroke();
  ellipse(charX - 40 + pupilX, charY + 15 + pupilY, 15, 15);
  ellipse(charX + 40 + pupilX, charY + 15 + pupilY, 15, 15);

  stroke(50);
  strokeWeight(4);
  noFill();
  rect(charX - 80, charY - 10, 75, 50, 10);
  rect(charX + 5, charY - 10, 75, 50, 10);
  line(charX - 5, charY + 15, charX + 5, charY + 15);

  stroke(0);
  strokeWeight(2.5);
  fill(240, 200, 170);
  triangle(charX, charY + 45, charX - 10, charY + 70, charX + 10, charY + 70);

  fill(0);
  noStroke();
  ellipse(charX, charY + 65, 5, 5);

  stroke(210, 70, 70);
  strokeWeight(3);
  noFill();
  arc(charX, charY + 90, 70, 20, 0, PI);

  stroke(0);
  strokeWeight(2);
  line(charX - 65, charY, charX - 15, charY);
  line(charX + 15, charY, charX + 65, charY);
}
