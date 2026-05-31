function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20, 20, 40);

  let timeFactor = frameCount * 0.03;
  let pulse700 = 700 + sin(frameCount * 0.02) * 30;
  let pulse500 = 500 + cos(frameCount * 0.025) * 20;
  let pulse300 = 300 + sin(frameCount * 0.03) * 15;

  noStroke();
  fill(30, 60, 80);
  circle(0, 400, pulse700);

  fill(60, 40, 100);
  circle(0, 400, pulse500);

  fill(100, 50, 100);
  circle(0, 400, pulse300);

  fill(255, 255, 255);
  for (let i = 0; i < 6; i++) {
    let starX = [450, 550, 300, 500, 350, 100][i];
    let starY = [50, 150, 30, 250, 350, 50][i];
    let starBaseSize = [2, 3, 2, 2, 3, 2][i];
    let starPulse = sin(frameCount * 0.1 + i) * 2 + starBaseSize;
    let starYOffset = (starY + frameCount * (0.2 + i * 0.05)) % 400;
    circle(starX, starYOffset, starPulse);
  }

  colorMode(HSB, 360, 100, 100);
  let baseHue = (frameCount * 0.7) % 360;
  let c1 = color(baseHue, 80, 90);
  let c2 = color((baseHue + 60) % 360, 80, 90);
  let dynamicColor = lerpColor(c1, c2, sin(frameCount * 0.05) * 0.5 + 0.5);
  colorMode(RGB, 255, 255, 255);

  fill(dynamicColor);
  rect(100 + sin(frameCount * 0.04) * 40, 0, 10, 400);

  fill(150, 50, 200);
  rect(120, 50, 5, 300 + sin(frameCount * 0.05) * 50);

  let triOffset = sin(frameCount * 0.05) * 25;
  fill(255, 100, 0);
  triangle(400 + triOffset, 100, 550 + triOffset, 150, 450 + triOffset, 250);

  fill(200, 50, 0);
  triangle(410 + triOffset, 110, 560 + triOffset, 160, 460 + triOffset, 260);

  stroke(200, 200, 200);
  strokeWeight(1);
  let lineWave = sin(frameCount * 0.02) * 30;
  line(0, lineWave, 600, 400 + lineWave);
  line(600, lineWave, 0, 400 - lineWave);

  noStroke();
  fill(240, 220, 170);
  ellipse(
    250 + cos(frameCount * 0.04) * 40,
    150 + sin(frameCount * 0.04) * 25,
    120 + sin(frameCount * 0.05) * 20,
    15,
  );

  noStroke();
  fill(160, 80, 40);
  arc(
    500,
    300,
    80,
    80,
    radians(110) + sin(frameCount * 0.02) * 0.3,
    radians(80) + sin(frameCount * 0.02) * 0.3,
  );

  stroke(dynamicColor);
  strokeWeight(2);
  noFill();
  let boxH = 70 + sin(frameCount * 0.07) * 30;
  rect(480, 350 - boxH, 100, boxH);
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveGif("과제4", 10);
  }
}
