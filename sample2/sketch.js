// 과제 2 (정적) — sketch.js에 기존 과제 코드를 붙여넣으세요.

function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(17, 24, 39);

  stroke(236, 72, 153, 180);
  strokeWeight(2);
  noFill();
  for (let i = 0; i < 8; i++) {
    rect(80 + i * 8, 70 + i * 8, 440 - i * 16, 260 - i * 16, 12);
  }

  fill(252, 231, 243);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text("과제 2 · 정적 작품", width / 2, 48);
  textSize(13);
  fill(244, 114, 182);
  text("sketch.js를 교체하세요", width / 2, 72);
}
