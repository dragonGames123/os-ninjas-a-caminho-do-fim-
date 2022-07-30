var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var  wall_1, wall_2, wall_3, wall_4, wall_5, wall_6, wall_7, wall_8, wall_9, wall_10, wall_11, wall_12, wall_13, wall_14;

var guard1
var vy = -2
var diamond, diamond_img;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("./assets/ninja escuro vd.png");
  car2_img = loadImage("./assets/ninja claro ve.png");
  diamond_img = loadImage("./assets/diamond1.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("grey");
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
