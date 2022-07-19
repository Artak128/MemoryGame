import { setClassInData } from './module/setClassInData/index.js';
import { openAll } from './module/openAll/index.js';
import { closeAll } from './module/closeAll/index.js';
import { checkActiveAndPending } from './module/checkActiveAndPending/index.js';
import { clearValues } from './module/clearValues/index.js';
import { setTime } from './module/setTime/index.js';
import { checkAndSetWinner } from './module/checkAndSetWinner/index.js';

function startGame(e, data, gameCondition) {
    if (e.target.dataset.event === "newgame") {
        gameCondition.backMain = false;
        setClassInData(data);
        setTime(gameCondition);
        openAll(data);
        e.target.parentElement.classList.remove("translateIn");
        e.target.parentElement.classList.add("translateOut");
        document.querySelector(".window").classList.remove("translateOut");
        document.querySelector(".window").classList.add("translateIn");
        setTimeout(() => {
            closeAll();
            gameCondition.clickable = true;
            gameCondition.backMain = true;
        }, 4000);
    }
}

function gameProcess(e, history, gameCondition, data) {
    if (e.target.classList.contains('item') && gameCondition.clickable) {
        gameCondition.clickable = false;
        if (gameCondition.active === '' && e.target.classList.length < 2) {
            gameCondition.active = String(e.target.id);
            gameCondition.activeValue = data[`${e.target.id}`]
            e.target.classList.add(data[`${e.target.id}`]);
            e.target.classList.add('rotateY');
            gameCondition.clickable = true;
        }
        else if (gameCondition.active !== '' && e.target.classList.length < 2) {
            gameCondition.pending = String(e.target.id);
            gameCondition.pendingValue = data[`${e.target.id}`]
            e.target.classList.add(data[`${e.target.id}`]);
            e.target.classList.add('rotateY');
            setTimeout(() => {
                clearValues(checkActiveAndPending(gameCondition), gameCondition);
                checkAndSetWinner(history, gameCondition);
                gameCondition.clickable = true;
            }, 1200);
        }
        else if (gameCondition.active !== '' && e.target.classList.length >= 2) {
            clearValues(checkActiveAndPending(gameCondition), gameCondition);
            checkAndSetWinner(history, gameCondition);
            gameCondition.clickable = true;
            
        } else {
            gameCondition.clickable = true;
        }
}
}

function backMainMenu(e, gameCondition, data) {
    if (e.target.dataset.event === 'mainMenu' && gameCondition.backMain) {
        Array.from(document.querySelectorAll('[data-event="general"]')).forEach(i => {
            i.classList.remove('translateIn');
            i.classList.add('translateOut');
        });
        document.querySelector('[data-event="general"]').classList.add('translateIn');
          gameCondition.active = '';
          gameCondition.activeValue = '';
          gameCondition.pending = '';
          gameCondition.pendingValue = '';
          gameCondition.startGame = 0;
          gameCondition.endGame = 0;
          gameCondition.openedCard = 0;
          gameCondition.clickable = false;
          gameCondition.backMain = true;
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                data[key] = 0;
            }
        }
          closeAll();
      }
}

function historyOpen(e, history) {
    if (e.target.dataset.event === 'history') {
        document.querySelector('[data-event="general"]').classList.remove('translateIn');
        document.querySelector('[data-event="general"]').classList.add('translateOut');
        document.querySelector('.history').classList.add('translateIn');
        document.querySelector('[data-event="historyData"]').innerHTML = '';
        history.forEach(i => {
        let tr = `<tr><td>${i.gameID}</td><td>${i.time}</td></tr>`;
        document.querySelector('[data-event="historyData"]').insertAdjacentHTML('beforeend', tr);
        })
    }
}

export { startGame, gameProcess, backMainMenu, historyOpen };