export function checkActiveAndPending(gameCondition) {
    if(gameCondition.activeValue === gameCondition.pendingValue) return true;
    else return false;
  }