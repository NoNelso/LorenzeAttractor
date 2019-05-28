function setup() {
  createCanvas(600, 500);
  background(0);
  let x = 0.0;
  let y = 0.0;
  let z = 0.0;
  let a = 10.0;
  let b = 28;
  let c = 8.0 / 3.0;
  let dx, dy, dz, dt;
}

function draw() {
  dt = 0.01;
  dx = a * (y - x);
  x = x + (dx * dt);
  dy = x * (b - z) - y;
  y = y + (dy * dt);
  dz = x * y - c * z;
  z = y + (dz * dt);
}