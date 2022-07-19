export function clearValues(params,gameCondition) {
    if(params){
        gameCondition.active = ''; gameCondition.activeValue = ''; gameCondition.pending = ''; gameCondition.pendingValue = '';
            gameCondition.openedCard += 2;}
    else { 
           document.getElementById(`${gameCondition.active}`).classList.remove(...document.getElementById(`${gameCondition.active}`).classList);
           document.getElementById(`${gameCondition.active}`).classList.add('item');
           document.getElementById(`${gameCondition.pending}`)?.classList.remove(...document.getElementById(`${gameCondition.pending}`).classList);
           document.getElementById(`${gameCondition.pending}`)?.classList.add('item');
           gameCondition.active = ''; 
           gameCondition.activeValue = ''; 
           gameCondition.pending = '';
           gameCondition.pendingValue = '';
          }
  }