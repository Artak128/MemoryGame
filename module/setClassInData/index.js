import { returnRandomClass } from "../returnRandomClass/index.js";
import { returnRandomItems } from "../returnRandomItems/index.js";
export function setClassInData(data) {
    let index = 0;
    let arrClass = returnRandomClass();
    let arrItem = returnRandomItems();
    for (let i = 0; i < arrClass.length; i++) {
      data[`item${arrItem[index]}`] = arrClass[i];
      index += 1;
      data[`item${arrItem[index]}`] = arrClass[i];
      index += 1;
    }
  }