function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);

  for (var x = 50; x < width-50; x += 50) {
    for (var y = 50; y < height-50; y+= 50) {
      for (var i = 0; i < 16; i+=4) {
        line(x + i, y, x + i, y + 12);
      }
      line(x, y, x + 12, y + 12);
    }
  }
}
