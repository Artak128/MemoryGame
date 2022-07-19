export function uploadHistory(history) {
    localStorage.setItem('history', JSON.stringify(history))
  }