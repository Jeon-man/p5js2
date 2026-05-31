let x = 300;
let y = 210;
let eyeH = 30;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245);

  let moveY = sin(frameCount * 0.05) * 5;
  let hand = sin(frameCount * 0.05) * 8;

  if (frameCount % 100 > 92) {
    eyeH = 5;
  } else {
    eyeH = 30;
  }

  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      x = x - 2;
    }
    if (keyCode == RIGHT_ARROW) {
      x = x + 2;
    }
  }

  x = constrain(x, 170, 430);

  noStroke();
  fill(80, 100, 140);
  rect(x - 150, 320 + moveY, 300, 80);

  stroke(0);
  strokeWeight(3);
  fill(250, 220, 190);
  ellipse(x - 25, 290 + moveY, 70, 70);
  ellipse(x + 25, 290 + moveY, 70, 70);
  ellipse(x, y + moveY, 200, 200);

  noFill();
  stroke(210, 170, 140);
  strokeWeight(2);
  arc(x, y + 95 + moveY, 15, 15, 0, PI);

  fill(40);
  noStroke();
  arc(x, y - 10 + moveY, 210, 190, PI, 0);

  stroke(0);
  strokeWeight(2.5);
  fill(255);
  ellipse(x - 40, y + 5 + moveY, 50, eyeH);
  ellipse(x + 40, y + 5 + moveY, 50, eyeH);

  fill(50);
  noStroke();
  if (eyeH > 10) {
    ellipse(x - 40, y + 5 + moveY, 15, 15);
    ellipse(x + 40, y + 5 + moveY, 15, 15);
  }

  stroke(0);
  strokeWeight(2.5);
  fill(240, 200, 170);
  triangle(x, y + 35 + moveY, x - 10, y + 60 + moveY, x + 10, y + 60 + moveY);

  fill(0);
  noStroke();
  ellipse(x, y + 55 + moveY, 5, 5);

  noFill();
  stroke(210, 70, 70);
  strokeWeight(3);

  if (mouseIsPressed) {
    arc(x, y + 82 + moveY, 70, 30, 0, PI);
  } else {
    arc(x, y + 82 + moveY, 70, 20, 0, PI);
  }

  stroke(0);
  strokeWeight(6);
  line(x - 110, 340 + moveY, x - 145 - hand, 365 + moveY);
  line(x + 110, 340 + moveY, x + 145 + hand, 365 + moveY);

  line(x - 50, 400 + moveY, x - 60, 440 + moveY);
  line(x + 50, 400 + moveY, x + 60, 440 + moveY);

  if (mouseIsPressed) {
    noStroke();
    fill(255, 180, 180, 180);
    ellipse(x - 65, y + 60 + moveY, 25, 12);
    ellipse(x + 65, y + 60 + moveY, 25, 12);
  }

  fill(20);
  noStroke();
  textSize(13);
}

function keyPressed() {
  if (key == "s" || key == "S") {
    saveGif("mySketch", 10);
  }
}
