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
    var damageFromObstacle = 100;
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
  
    
    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 100);
      var redSquare = draw.bitmap("img/lee.png")
      redSquare.x = -25;
      redSquare.y = -25; 
      enemy.x = x;
      enemy.y = y; 
      enemy.addChild(redSquare);
      enemy.velocityX = -6;
      game.addGameItem(enemy);
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-100)
      };
      enemy.onProjectileCollision = function (){
        game.increaseScore(100);
        enemy.fadeOut();
      }
}
  function createReward(x,y){
    var reward = game.createGameItem("reward", 25)
    var candy = draw.bitmap("img/blowpop.png");
    candy.x = -25;
    candy.y = -25;
    reward.x = x;
    reward.y = y;
    reward.addchild(candy);
    reward.velocityX = -1;
    reward.addGameItem(reward);
    reward.onPlayerCollision = function (){
      game.changeIntegrity(+10000);
    }  };
    createEnemy(400, groundY - 10);
    createEnemy(800, groundY - 100);
    createEnemy(1200, groundY - 50);
    createReward(1500, groundY-80)
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
