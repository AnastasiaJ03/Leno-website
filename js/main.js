const menu = document.querySelector(".navbar__menu");
const burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  menu.classList.toggle("active");
});
