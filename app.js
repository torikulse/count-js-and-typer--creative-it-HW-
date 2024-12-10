
let heading = document.querySelector("#heading");

let typeCount = 0;
let forward = true;
function typeJs() {
  if (forward) {
    heading.innerHTML = heading.dataset.text.slice(0, typeCount);
    typeCount++;
    if (typeCount == heading.dataset.text.length + 1) {
      forward = false;
    }
  } else {
    heading.innerHTML = heading.dataset.text.slice(0, typeCount);
    typeCount--;
    if (typeCount == 0) {
      forward = true;
    }
  }
}

setInterval(() => {
  typeJs();
}, heading.dataset.typespeed);




// count js 

const countDOM = document.querySelector("#count");

function hexCode() {
  let colorCode = "#";
  let hex = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    colorCode += hex[random];
  }
  return colorCode;
}

let counterCount = 1;
function counterJs() {
  countDOM.innerHTML = counterCount;
  countDOM.style.color = hexCode();
  counterCount++;

  if (counterCount > countDOM.dataset.countlimit) {
    clearInterval(stop);
  }
}

let stop = setInterval(() => {
  counterJs();
}, countDOM.dataset.countspeed);
