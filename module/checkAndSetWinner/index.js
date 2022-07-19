import { uploadHistory } from "../uploadHistory/index.js";
import { generateRandom } from "../generateRandom/index.js";
import { setTime } from "../setTime/index.js";

export function checkAndSetWinner(history,gameCondition) {
  if(gameCondition.openedCard >= 16){
    setTime(gameCondition);
    let id = generateRandom(1000,9999);
    let second = ((gameCondition.endGame - gameCondition.startGame) / 1000).toFixed(4); 
    history.push({
      gameID: id,
      time: second,
    });
    document.querySelector('.window').classList.remove('translateIn');
    document.querySelector('.window').classList.add('translateOut');
    document.querySelector('.gameOver').classList.remove('translateOut');
    document.querySelector('.gameOver').classList.add('translateIn');
    document.querySelector('[data-event="id"]').textContent = history.at(-1).gameID;
    document.querySelector('[data-event="time"]').textContent = history.at(-1).time;
    uploadHistory(history);
  }
}
