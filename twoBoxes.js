//canvas definition
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//get canvas dimensions
var canvasWid = canvas.width;
var canvasHig = canvas.height;
//define the color for the boxes
var oneColor='red', twoColor='green';
//define initial position
var initXOneBox = 10, 
    initYOneBox = 10, 
    initXTwoBox = 50,
    initYTwoBox = 50;
//define box energies
var oneBoxEnergy = 1;
var twoBoxEnergy = 1.5;
//define box horitontal and vertical speeds
var xSpeed = 4;
var ySpeed = 3;

//box object constructor
function Box(x, y, c, e) {
    this.xpos = x;
    this.ypos = y;
    this.color = c;
    this.energy = e;
    this.xDirect = 1;//initial directions
    this.yDirect = 1;
    this.testDirection = function () {
        if (this.xpos<0 || this.xpos>canvasWid-50) {
            this.xDirect*=-1;
        }
        if (this.ypos<0 || this.ypos>canvasHig-50) {
            this.yDirect*=-1;
        }
    };
    this.position = function () {//defines the box position
        this.xpos+=xSpeed*this.energy*this.xDirect; this.ypos+=ySpeed*this.energy*this.yDirect;    
    };
    this.print = function () {
        ctx.fillStyle = c;//defines the box color
        ctx.fillRect (this.xpos,this.ypos,50,50);//draw the box
    };
}

//create two boxes
var oneBox = new Box(initXOneBox, initYOneBox, oneColor, oneBoxEnergy);
var twoBox = new Box(initXTwoBox, initYTwoBox, twoColor, twoBoxEnergy);

//clears the canvas function
var clearCanvas = function () {
    ctx.fillStyle = 'white';
	ctx.fillRect(0,0,canvasWid,canvasHig);
};
//main loop
function main() {
   init = window.requestAnimationFrame(main);
  
  // Whatever your main loop needs to do.
    
    clearCanvas();
    oneBox.testDirection();
    oneBox.position();
    oneBox.print();//print the 1st box
    twoBox.testDirection();
    twoBox.position();
    twoBox.print();//print the 2nd box
}

function startLoop(){
    
    main();
}

startLoop();