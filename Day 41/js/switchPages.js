import { ls0, ls1, ls2, ls3, ls4, ls5, ls6 } from "./pages.js";
let main = document.querySelector(".main");
const changePage = document.querySelectorAll(".change-page");

const pages = {
  0: ls0,
  1: ls1,
  2: ls2,
  3: ls3,
  4: ls4,
  5: ls5,
  6: ls6,
};

main.innerHTML = pages[0];

changePage.forEach((list, index) => {
  list.addEventListener("click", () => {
    main.innerHTML = pages[index];
  });
});
