// 과제 4 (동적) — sketch.js에 기존 과제 코드를 붙여넣으세요.

let particles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-1.2, 1.2),
      vy: random(-1.2, 1.2),
      size: random(4, 10),
    });
  }
}

function draw() {
  background(30, 27, 75, 40);

  noStroke();
  for (const p of particles) {
    fill(129, 140, 248, 180);
    circle(p.x, p.y, p.size);
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }

  fill(224, 231, 255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("과제 4 · 동적 작품", width / 2, 48);
  textSize(13);
  fill(165, 180, 252);
  text("sketch.js를 교체하세요", width / 2, 72);
}
