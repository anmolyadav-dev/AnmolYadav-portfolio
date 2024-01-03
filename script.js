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

// var prevScrollPos = window.scrollY;

// function handleScroll() {
//   var currentScrollPos = window.scrollY;

//   if (prevScrollPos != currentScrollPos) {
//     navbar.classList.remove("active");
//   }
// }
// window.addEventListener("scroll", handleScroll);

// ===============SCROLL PAGE ACTIVE LINK ON NAVBAR

let pages = document.querySelectorAll(".page");
let navLinks = document.querySelectorAll(".header .navbar a");

window.addEventListener("scroll", () => {
  pages.forEach((page) => {
    let top = window.scrollY;
    let offset = page.offsetTop - 150;
    let height = page.offsetHeight;
    let id = page.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]") // [" href *= id "] this is attribute selector which selecting the element which have the id  which is satisfying the if condition and adding active class to that element
          .classList.add("active");
      });
    }

    // remove menu bar when any navlink is clicked
    navbar.classList.remove("active");
  });
});
