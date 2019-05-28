let x = 0.01;
let y = 0.0;
let z = 0.0;
let a = 10.0;
let b = 28;
let c = 8.0 / 3.0;
let dt = 0.01;
let dx, dy, dz;

function setup() {
  createCanvas(600, 500);
  background(0);
}

function draw() {
  dx = a * (y - x);
  x = x + (dx * dt);
  dy = x * (b - z) - y;
  y = y + (dy * dt);
  dz = x * y - c * z;
  z = z + (dz * dt);
}