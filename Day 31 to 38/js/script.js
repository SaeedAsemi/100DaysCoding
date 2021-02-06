let toggleBtn = document.querySelector("#sidebar-toggle");
let mainTgl = document.querySelector(".sidebar-toggled");
let sideTgl = document.querySelectorAll(".toggled .main-side__list a span");
let sideTxtLogoTgl = document.querySelector(".toggled .main-nav-logo__link");
let sideLogoTgl = document.querySelector(".toggled .main-nav-logo");

let BtnActive = true;
toggleBtn.addEventListener("click", function () {
  if (BtnActive == true) {
    closeSide();
    BtnActive = false;
  } else if (BtnActive == false) {
    openSide();
    BtnActive = true;
  }
});

function closeSide() {
  toggleBtn.style.transform = "scaleX(-1) translateX(-50%)";
  //mainTgl.style.gridTemplateColumns = "1fr 15fr";
  mainTgl.classList.add("pressBtnClose"); // main columns

  sideTxtLogoTgl.classList.add("open"); // i change bottom line to this with a external css class.
  //sideTxtLogoTgl.style.display = "none";
  for (let i = 0; i < sideTgl.length; i++) {
    //sideTgl[i].style.display = "none";
    sideTgl[i].classList.add("open");
  }

  sideLogoTgl.style.padding = "0";
  sideLogoTgl.style.marginRight = "auto";
  sideLogoTgl.style.marginLeft = "auto";
}

function openSide() {
  toggleBtn.style.transform = "scaleX(1) translateX(50%)";
  //mainTgl.style.gridTemplateColumns = "1fr 5fr";
  mainTgl.classList.remove("pressBtnClose"); // main columns

  sideTxtLogoTgl.classList.remove("open"); // i change bottom line to this with a external css class.
  //sideTxtLogoTgl.style.display = "inline";
  for (let i = 0; i < sideTgl.length; i++) {
    //sideTgl[i].style.display = "inline-block";
    sideTgl[i].classList.remove("open");
  }

  sideLogoTgl.style.paddingLeft = "2rem";
  sideLogoTgl.style.margin = "3rem 0";
}
