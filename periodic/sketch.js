function setup() {
  createCanvas(1000,1000)
}

function draw() {
  clear();
  for (var i=0; i<480; i+=20) {
    ellipse(100+i,300+10*sin(frameCount),10,10);
  }
  

 
}