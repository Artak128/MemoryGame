export function downloadHistory() {
  if(localStorage.getItem('history')){ return JSON.parse(localStorage.getItem('history'))};
  return [] ;
}