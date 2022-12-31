const hamburgerMenuOpenButton = document.querySelector(".hamburger-menu-open");
const hamburgerMenuCloseButton = document.querySelector(
  ".hamburger-menu-close"
);

hamburgerMenuOpenButton.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".hamburger-menu-wrapper");
  mobileMenu.classList.add("open");
});

hamburgerMenuCloseButton.addEventListener("click", () => {
  const mobileMenu2 = document.querySelector(".hamburger-menu-wrapper");
  mobileMenu2.classList.remove("open");
});
