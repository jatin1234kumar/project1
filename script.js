// normal decelerations.
const navbar = document.getElementById("Navbar");
const featureBoxs = document.querySelectorAll(".featureBox");

// declared functions
function showNavbar() {
  if (window.scrollY >= 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Prepare the body tag by adding a "js-paused" class
document.body.className += " js-loading";
window.addEventListener("load", showPage, false);
function showPage() {
  document.body.className = document.body.className.replace("js-loading", "");
}

// show navbar only when the page is scrolled down by 50px;
window.addEventListener("scroll", () => {
  showNavbar();
});
showNavbar();

// This is to show eliment once when scrolled

// show navbar only when the page is scrolled down by 50px;
window.addEventListener("scroll", () => {
  showNavbar();
});

showNavbar();

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add animation
          observer.unobserve(entry.target); // Stop observing to prevent re-triggering
        }
      });
    },
    { threshold: 0.4 }
  ); // Trigger when 40% of the element is visible

  elements.forEach((el) => observer.observe(el));
});

// hamburger menu

const nav = document.querySelector("nav");
function toggleMenu(element) {
  element.classList.toggle("open");
  nav.classList.toggle("showMenu");
}
