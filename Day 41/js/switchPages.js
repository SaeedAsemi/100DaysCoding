import {
  accountPage,
  settingPage,
  comparisonPage,
  breakdownPage,
  homePage,
  notfoundPage,
  overviewPage,
} from "./pages.js";

const pages = {
  accountPage,
  overviewPage,
  settingPage,
  comparisonPage,
  breakdownPage,
  homePage,
  notfoundPage,
};

const main = document.querySelector(".main");
const redirectButtons = document.querySelectorAll(".change-page");
let currentActivePage;

function changeActivePage(page) {
  if (currentActivePage !== page) {
    currentActivePage = page;
    main.innerHTML = page;
  }
}

changeActivePage(pages.homePage);

redirectButtons.forEach((button) => {
  button.addEventListener("click", function () {
    changeActivePage(pages[this.id] ?? pages.notfoundPage);
  });
});
