let x = 0.01;
let y = 0.0;
let z = 0.0;

let a = 10.0;
let b = 28;
let c = 8.0 / 3.0;

let dt = 0.01;
let dx, dy, dz;

let s = 5;

let dot = new Array()

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
  translate(width / 2, height / 2);
  stroke(255);
  point(s * x, s * y);

}