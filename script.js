const navbar = document.getElementById("Navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navbar.classList.add("sticky");
    console.log("got sticky");
  } else {
    navbar.classList.remove("sticky");
    console.log("removed sticky");
  }
});
