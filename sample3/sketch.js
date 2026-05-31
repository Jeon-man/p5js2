// 과제 3 (동적) — sketch.js에 기존 과제 코드를 붙여넣으세요.

let t = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(5, 46, 22);

  noFill();
  strokeWeight(2);
  for (let i = 0; i < 5; i++) {
    stroke(34, 197, 94, 120 + i * 25);
    let r = 40 + i * 28 + sin(t + i) * 12;
    circle(width / 2, height / 2 + 10, r * 2);
  }

  fill(220, 252, 231);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text("과제 3 · 동적 작품", width / 2, 48);
  textSize(13);
  fill(74, 222, 128);
  text("sketch.js를 교체하세요", width / 2, 72);

  t += 0.04;
}
