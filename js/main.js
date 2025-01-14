const menu = document.querySelector(".navbar__menu");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar");
burger.addEventListener("click", function () {
  menu.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nav.classList.add("navbar--scroll");
  } else {
    nav.classList.remove("navbar--scroll");
  }
});
