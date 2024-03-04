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
  var walker = {
    positionX:0, //x coord
    positionY:0,// y coord
    speedX:0, // speed along x axis 
    speedY:0, // speed along y axis 

  };
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  finds out which key was pressed
  */
  function handleKeyDown(event) {
    console.log(event.which)
    if (event.which === KEY.RIGHT) {
      console.log("Right pressed");
    }
    else if (event.which === KEY.LEFT) {
      console.log("Left pressed");
    }
    else if (event.which === KEY.UP) {
      console.log("Up pressed");
    }
    else if (event.which === KEY.DOWN) {
      console.log("Down pressed");
    }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
    positionX += speedX; // update the position of the box along the x-axis
  }
  function redrawGameItem(){
    $("#box").css("left", positionX); // draw the box in the new location, positionX pixels away from the "left"
  }
}}
