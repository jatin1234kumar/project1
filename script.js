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

// this is to show animtion when the user reaches the projects parts

window.addEventListener("scroll", () => {
  if (window.scrollY >= 559 && window.scrollY < 1039) {
    showAnimation(0);
  } else if (window.scrollY >= 1039 && window.scrollY < 1519) {
    showAnimation(1);
  } else if (window.scrollY >= 1519 && window.scrollY < 1999) {
    showAnimation(2);
  } else if (window.scrollY >= 1999) {
    showAnimation(3);
  }

  function showAnimation(value) {
    featureBoxs[value].classList.add("showAnimation");
  }
});
