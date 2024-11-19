document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("#navbar");

    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  });