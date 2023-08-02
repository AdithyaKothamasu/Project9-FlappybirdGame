const score =document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

gameMessage.addEventListener("click",start);
startScreen.addEventListener("click",start);
document.addEventListener("keydown",pressOn);
document.addEventListener("keyup",pressOff);
let keys = {};
let player = {};
function start(){
  console.log("start");
  player.speed = 5;
  gameMessage.classList.add("hide");
  startScreen.classList.add("hide");
  let bird = document.createElement("div");
  bird.setAttribute("class","bird");
  let wing = document.createElement("span");
  wing.setAttribute("class","wing");
  wing.pos = 24;
  wing.style.top = wing.pos + "px";
  bird.appendChild(wing);
  gameArea.appendChild(bird);
  player.x = bird.offsetLeft;
  player.y = bird.offsetTop;
  window.requestAnimationFrame(playGame);

}

function playGame(){
  let bird = document.querySelector(".bird");
  let wing = document.querySelector(".wing");
  let move = false;
  if(keys.ArrowLeft && player.x > 0){
    player.x -= player.speed;
    move = true;
  }
  if(keys.ArrowRight && player.x < (gameArea.offsetWidth - 50)){
    player.x += player.speed;
    move = true;
  }
  if(keys.ArrowUp || keys.Space && player.y > 0){
    player.y -= player.speed;
    move = true;
  }
  if(keys.ArrowDown && player.y < (gameArea.offsetHeight - 50)){
    player.y += player.speed;
    move = true;
  }
  if(move == true){
    wing.pos = (wing.pos==24)?30:24;
    wing.style.top = wing.pos + "px";
  }
  bird.style.top = player.y + "px";
  bird.style.left = player.x + "px";

  window.requestAnimationFrame(playGame);
}



function pressOn(e){
  e.preventDefault();
  keys[e.code] = true;
  console.log(e.code);
}

function pressOff(e){
  e.preventDefault();
  keys[e.code] = false;
  console.log(e.code);
} 