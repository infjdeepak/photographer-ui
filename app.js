const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  nav.classList.toggle("nav-open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    nav.classList.toggle("nav-open");
  });
});
