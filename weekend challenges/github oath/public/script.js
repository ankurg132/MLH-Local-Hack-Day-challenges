const botDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let numClosedDoors=3;
let startButton=document.getElementById("start");
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying=true;
const closedDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
function isBot(door){
  if(door.src===botDoorPath){
    return true;
  }
  else{
    return false;
  }
};
function isClicked(door){
  if(door.src===closedDoorPath){
    return false;
  }
  else{
    return true;
  }
};
function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors===0){
    gameOver('win');
  }
  else if(isBot(door)){
    gameOver();
  }
};
function randomChoreDoorGenerator(){
  var choreDoor=Math.floor(Math.random()*numClosedDoors);
  if(choreDoor===0){
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else if(choreDoor===1){
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  }
  else{
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
};
let doorImage1=document.getElementById('door1');
doorImage1.onclick=function () {
 if(currentlyPlaying && !isClicked(doorImage1)){
     doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
let doorImage2=document.getElementById('door2');
doorImage2.onclick=function () {
if(currentlyPlaying && !isClicked(doorImage2)){
  doorImage2.src=openDoor2;
  playDoor(doorImage2);
}
};
let doorImage3=document.getElementById('door3');
doorImage3.onclick=function () {
  if(currentlyPlaying && !isClicked(doorImage3)){
  doorImage3.src=openDoor3;
  playDoor(doorImage3);
  }
};
const startRound = function(){
  numClosedDoors=3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  currentlyPlaying =true;
  startButton.innerHTML = "Good Luck";
  randomChoreDoorGenerator();
};
startButton.onclick = function(){
  if(!currentlyPlaying){
startRound();
  }
};
function gameOver(status){
  if(status==='win'){
    startButton.innerHTML='You win! Play again?';
  }
  else{
    startButton.innerHTML='Game over! Play again?';
  }
  currentlyPlaying=false;
};
startRound();
//randomChoreDoorGenerator();