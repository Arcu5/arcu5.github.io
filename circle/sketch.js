function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
}
var x=200;
var y=200;
var r=100;
function draw() {
	clear();
  for (var i=0; i<360; i++) {
    line(x,y,x+cos(i)*r,y+sin(i)*r);
    ellipse(500+cos(i)*r,500+sin(i)*r,10,10);
  }
  }