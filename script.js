const container = document.querySelector(".container");
const links = document.querySelectorAll(".links a");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.toggle("active");
  });
  container.classList.toggle("active");
});
