// 과제 1 (정적) — sketch.js에 기존 과제 코드를 붙여넣으세요.

function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(15, 23, 42);

  noStroke();
  for (let i = 0; i < 6; i++) {
    fill(99 + i * 20, 102 + i * 10, 241, 180);
    circle(120 + i * 75, 200, 90 + i * 12);
  }

  fill(248, 250, 252);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("과제 1 · 정적 작품", width / 2, 48);
  textSize(13);
  fill(148, 163, 184);
  text("sketch.js를 교체하세요", width / 2, 72);
}
