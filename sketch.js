function setup() {
  createCanvas(600, 500);
  float x y, z, a, b, c;
  float dx, dy, dz;
  x = y = z = 0;
  a = b = c = 1;
}

function draw() {
  dx = a * (y - x);
  x += dx;
  dy = x * (b - z) - y;
  y += dy;
  dz = x * y - c * z;
  z += dz;
}

function line() {
  this.show
}