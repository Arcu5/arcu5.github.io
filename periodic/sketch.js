var amp=20;    //Amplite of the wave. How much the ellipses vary vertically from original yPos
var xSpace=15; //Spacing between each ellipse along the horizontal plane
var unitSize=10; //Unit size of each ellipse(circle)
var yDistance=200; //Total length of the sine wave in canvas units
var x=20;        //Frequency Modifier?
function setup() {
  createCanvas(1000,1000)
  frameRate(10)
}

function draw() {
 clear();
  
  for (var i=0; i < yDistance; i+=xSpace) {
    ellipse(100+i,280+amp*sin(frameCount+i/x),unitSize,unitSize); //yPos+amp*sin(frameCount+b) where b != 0.
    //This gives variation to each ellipse, simulating a sine wave like function
  
  }
}
  

 