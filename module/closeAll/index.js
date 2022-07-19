export function closeAll() {
    Array.from(document.querySelectorAll('.item')).forEach(i=>{ 
      i.classList.remove(...i.classList);
      i.classList.add('item');
      })
}