function toggleMenu() {
  console.log("toggleMenu() called");
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToTop() {
  console.log("scrollToTop() called");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  history.replaceState({}, document.title, window.location.pathname);
}

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) section.scrollIntoView({ behavior: "smooth" });
  history.pushState({}, "", sectionId);
  toggleMenu();
}

window.onscroll = function () {
  fixedHeader();
};
var header = document.getElementById("desktop-nav");
var mobileHeader = document.getElementById("hamburger-nav");
var sticky = header.offsetTop;
var mobileSticky = mobileHeader.offsetTop;
function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (window.pageYOffset > mobileSticky) {
    mobileHeader.classList.add("sticky");
  } else {
    mobileHeader.classList.remove("sticky");
  }
}
