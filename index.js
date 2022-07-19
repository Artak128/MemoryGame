import {downloadHistory} from './module/downloadHistory/index.js';
import {startGame, gameProcess, backMainMenu, historyOpen } from './app.js';

//////////// State /////////////////
let data = {
  item0: "",
  item1: "",
  item2: "",
  item3: "",
  item4: "",
  item5: "",
  item6: "",
  item7: "",
  item8: "",
  item9: "",
  item10: "",
  item11: "",
  item12: "",
  item13: "",
  item14: "",
  item15: "",
};

let gameCondition = {
  active: '',
  activeValue: '',
  pending: '',
  pendingValue: '',
  startGame: 0 ,
  endGame: 0,
  openedCard: 0 ,
  clickable: false,
  backMain: true,
};

let history = [];
history = downloadHistory();

////////////  Event /////////////
document.addEventListener('click', (e)=>{startGame(e,data,gameCondition)});
document.addEventListener('click', (e)=>{gameProcess(e,history,gameCondition,data)});
document.addEventListener('click', (e)=>{backMainMenu(e,gameCondition,data)});
document.addEventListener('click', (e)=>{historyOpen(e,history)});

    

  

