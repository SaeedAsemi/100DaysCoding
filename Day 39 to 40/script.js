let rowNum = document.querySelector(".rowNum");
let colNum = document.querySelector(".colNum");
let btn = document.querySelector(".makeGrid");
let main = document.querySelector(".main");
let html = ``;

btn.addEventListener("click", () => {
  let row = Number(rowNum.value);
  let col = Number(colNum.value);

  if (row > 200) {
    row = 200;
  }
  if (col > 100) {
    col = 100;
  }

  main.style.gridTemplateColumns = `repeat(${col},1fr)`;
  main.style.gridTemplateRows = `repeat(${row},100px)`;

  html = ``;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      html += "<span></span>";
    }
  }
  main.innerHTML = html;
});
