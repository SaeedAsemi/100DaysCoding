import { ls0, ls1, ls2, ls3, ls4, ls5, ls6 } from "./pages.js";

let main = document.querySelector(".main");
let list0 = document.querySelector(".main-nav-logo");
let list1 = document.querySelector(".list1");
let list2 = document.querySelector(".list2");
let list3 = document.querySelector(".list3");
let list4 = document.querySelector(".list4");
let list5 = document.querySelector(".list5");
let list6 = document.querySelector(".list6");

main.innerHTML = ls0;

list0.addEventListener("click", () => {
  main.innerHTML = ls0;
});

list1.addEventListener("click", () => {
  main.innerHTML = ls1;
});

list2.addEventListener("click", () => {
  main.innerHTML = ls2;
});

list3.addEventListener("click", () => {
  main.innerHTML = ls3;
});

list4.addEventListener("click", () => {
  main.innerHTML = ls4;
});

list5.addEventListener("click", () => {
  main.innerHTML = ls5;
});

list6.addEventListener("click", () => {
  main.innerHTML = ls6;
});
