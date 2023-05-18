var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x1, y1, x2, y2){
    var hitZoneSize = 50;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x1;
    sawBladeHitZone.y = y1;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/duck.png");
    obstacleImage.x = x2;
    obstacleImage.y= y2;
    obstacleImage.scaleX = .5;
    obstacleImage.scaleY = .5;
    sawBladeHitZone.addChild(obstacleImage);
    }
    createSawBlade(600, 180, -50, -70)
    createSawBlade(900, 300, -50, -70)
    createSawBlade(1200, 300, -50, -70)
   
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25; 
    enemy.x = 400;
    enemy.y = groundY - 50; 
    enemy.addChild(redSquare);
    game.addGameItem(enemy);
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
