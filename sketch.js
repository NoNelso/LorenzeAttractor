function setup() {
  createCanvas(600, 500);
  background(0);
  float x y, z, a, b, c;
  float dx, dy, dz, dt;
  x = y = z = 0;
  a = 10;
  b = 28;
  c = 8.0 / 3.0;
  dt = 1;
}

function draw() {
  dx = a * (y - x);
  x += (dx * dt);
  dy = x * (b - z) - y;
  y += (dy * dt);
  dz = x * y - c * z;
  z += (dz * dt);
}