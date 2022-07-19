export function setTime(gameCondition) {
    if(gameCondition.startGame > 0){
       gameCondition.endGame = new Date().getTime();
   } else {
     gameCondition.startGame = new Date().getTime();
   }
}