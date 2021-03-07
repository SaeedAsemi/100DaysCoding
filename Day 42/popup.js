const btn = document.querySelector("button");
const popup = document.querySelector(".popup-section");
const popupClose = document.querySelector(".popup__close");

btn.addEventListener("click", () => {
  popup.style.display = "block";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });