/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY ={
    "LEFT": 37,
    "RIGHT": 39,
    "UP": 38,
    "DOWN": 40
  }
  
  // Game Item Objects
var walker = {
  positionX:0, //x coord
  positionY:0,// y coord
  speedX:0, // speed along x axis 
  speedY:0, // speed along y axis 

};

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);        // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                   

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  finds out which key was pressed
  */
  function handleKeyDown(event) {
    console.log(event.which)
    if (event.which === KEY.RIGHT) {
      console.log("Right pressed");//alerts the console of right press
      walker.speedX = +5 //moves direction right
    }
    else if (event.which === KEY.LEFT) {
      console.log("Left pressed"); //alerts the console of left press
      walker.speedX = -5; //moves direction left 
    }
    else if (event.which === KEY.UP) {
      console.log("Up pressed");//alerts the console of up press
      walker.speedY = -5; //moves direction up
    }
    else if (event.which === KEY.DOWN) {
      console.log("Down pressed");//alerts the console of down press
      walker.speedY = +5; //moves direction down
    }
    
  }
  function handleKeyUp(event){
    walker.speedX = 0;
    walker.speedY=0;
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  //ends the game
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  //moves the walker
  function repositionGameItem(){
    walker.positionX += walker.speedX; // update the position of the box along the x-axis
    walker.positionY += walker.speedY; // update the position of the box along the y-axis
    
  }
  //redraws the walker 
  function redrawGameItem(){
    $("#walker").css("left", walker.positionX) // draw the box in the new location, positionX pixels away from the "left"
    $("#walker").css("top", walker.positionY); // draw the box in the new location, positionY pixels away from the "top"
  }
  //stops the walker from leaving the board 
  function wallCollision(){
    if (walker.positionX >= $("#board").width()-50){
      walker.positionX = ($("#board").width()-50); //stop walker from leaving the right wall
    }
    if (walker.positionX <= 0){
      walker.positionX=0 //stops walker from leaving the left wall
    }
    if (walker.positionY <= 0){
      walker.positionY = 0 //stops walker from leaving the top wall
    }
    if (walker.positionY >= $("#board").height()-50){
      walker.positionY= $("#board").height()-50
    }
  }
  
}

