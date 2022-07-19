export function generateRandom(min = 0, max = 16) {
    let rand = Math.random();
    rand = Math.floor(rand * (max - min));
    rand = rand + min;
    return rand;
  }