const navbar = document.getElementById("Navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

const featureBoxs = document.querySelectorAll(".featureBox");

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
