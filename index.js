
console.log("hello");

const hamburgerOpenButton = document.getElementById("hamburger-open-button");

const hamburgerMenu = document.getElementById("hamburger-menu-id");

const hamburgerCloseButton = document.getElementById("hamburger-close-button");

hamburgerOpenButton.addEventListener("click", function () {
  hamburgerMenu.classList.add("is-open-hamburger");
});

hamburgerCloseButton.addEventListener("click", function () {
  hamburgerMenu.classList.remove("is-open-hamburger");
});

console.log("hey");