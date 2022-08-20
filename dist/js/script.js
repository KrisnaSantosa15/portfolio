window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
    header.classList.remove("navbar-fixed");
  }
};
// End Navbar Fixed

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
// End Hamburger behavior

const dropdown = document.querySelector("#dropdown");
const dropdownMenu = document.querySelector("#dropdown-menu");
dropdown.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden");
});
// End Dropdown behavior

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End Scroll to top behavior

// close hamburger menu when click outside
window.addEventListener("click", function (event) {
  if (
    !event.target.matches([".dropdown-icon", ".dropdown-title", "#hamburger"])
  ) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
    dropdownMenu.classList.add("hidden");
  }
});
