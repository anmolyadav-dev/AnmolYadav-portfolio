window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("loader-hidden");
});

// NAvbar disapper
const menuIcon = document.getElementById("menu-icon");
var navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
// remove navbar when clicked on any link

var prevScrollPos = window.scrollY;

function handleScroll() {
  var currentScrollPos = window.scrollY;

  if (prevScrollPos != currentScrollPos) {
    navbar.classList.remove("active");
  }
}
window.addEventListener("scroll", handleScroll);
