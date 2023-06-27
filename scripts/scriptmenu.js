document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menudesktop-btn");
  const menuMobile = document.querySelector(".navbarmobile");
  const menuMobileLinks = document.querySelector(".menumobile-links");

  menuBtn.addEventListener("click", function () {
    menuMobileLinks.classList.toggle("active");
  });
});
