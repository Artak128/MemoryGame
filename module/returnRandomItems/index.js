import { generateRandom } from "../generateRandom/index.js";
export function returnRandomItems() {
    let arr = [];
  
    while (arr.length < 16) {
      let condition = true;
      let num = generateRandom();
      arr.forEach((i) => {
        if (i === num) {
          condition = false;
        }
      });
      if (condition) {
        arr.push(num);
      }
    }
    return arr;
  }