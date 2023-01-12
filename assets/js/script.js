let header = document.getElementById("header");
const navLinks = document.querySelectorAll('nav a');

window.addEventListener("scroll", function() {
  let scroll = window.pageYOffset;
  if (scroll >= 10) {
    header.classList.add("visible");
    navLinks.forEach(link => link.classList.add('header-visible'));
  } else {
    header.classList.remove("visible");
  }
});
