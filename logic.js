var character = document.getElementById("character");
var block = document.getElementById("block");
var scoreTitle = document.getElementById("score");
var score = 0;
var endScreen = document.getElementById("endScreen")
var playScreen = document.getElementById("playScreen")

var jumpSound = new Audio("sounds/jump.mp3")

var ended = true

var myPix = new Array("obstacles/enemycat.png","obstacles/enemycat2.gif", "obstacles/subspace.webp");
function choosePic() {
  var randomNum = Math.floor(Math.random() * myPix.length);
  document.getElementById("enemy").src = myPix[randomNum];
  }


var loseSound = new Audio("sounds/catmad.mp3")

function jump() {
  if(ended == false){
    if(character.classList != "animate"){
      character.classList.add("animate");
      jumpSound.pause()
      jumpSound.currentTime = 0
      jumpSound.volume =  0.15;
      jumpSound.play();
    }
    setTimeout(function() {
      character.classList.remove("animate");
      score += 1
      scoreTitle.innerHTML = `score: ${score}`
    }, 500);
    choosePic();
  }
}



var checkDead = setInterval(function(){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<20 && blockLeft>0 && characterTop>=255) {
    block.style.animation = "none"
    score = 0
    scoreTitle.innerHTML = `score: 0`
    loseSound.play();
    endScreen.style.visibility = "visible";
    ended = true
    /*block.style.animation = "block 1s linear infinite"*/
  }
}, 10);

function retry() {
  score = 0
  scoreTitle.innerHTML - `score: 0`
  block.style.animation = "block 1s linear infinite";
  endScreen.style.visibility = "hidden";
  ended = false
}
function startGame() {
  score = 0
  scoreTitle.innerHTML - `score: 0`
  playScreen.style.visibility = "hidden";
  block.style.animation = "block 1s linear infinite";
  endScreen.style.visibility = "hidden";
  ended = false
}