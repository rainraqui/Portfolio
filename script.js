function toggleMenu(){
    console.log("toggleMenu() called");
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function scrollToTop() {
    console.log("scrollToTop() called");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    history.replaceState({}, document.title, window.location.pathname);
}  

window.onscroll = function() {fixedHeader()};
var header = document.getElementById("desktop-nav");
var sticky = header.offsetTop;
function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}