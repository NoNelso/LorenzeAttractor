let x = 0.01;
let y = 0.0;
let z = 0.0;

let a = 10.0;
let b = 28;
let c = 8.0 / 3.0;

let dt = 0.01;
let dx, dy, dz;

let s = 5;
let h = 0;

let dot = new Array()

function setup() {
  createCanvas(600, 500, WEBGL);
  colorMode(HSB);
}

function draw() {
  background(0);

  dx = a * (y - x);
  x = x + (dx * dt);

  dy = x * (b - z) - y;
  y = y + (dy * dt);

  dz = x * y - c * z;
  z = z + (dz * dt);

  dot.push(new p5.Vector(x, y, z));

  let camX = map(mouseX, 0, width, -200, 200);
  let camY = map(mouseY, 0, height, -200, 200);
  camera(camX, camY, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);

  scale(s);
  stroke(255);
  noFill();

  h = 0;
  beginShape();
  for (let v of dot) {
    stroke(h, 255, 255);
    vertex(v.x, v.y, v.z);
    if (h > 254) h = 0;
    else h += .1;
  }
  endShape();
}