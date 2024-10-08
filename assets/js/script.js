// Scroll Section Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*="${id}"]`)
          .classList.add("active");
      });
    }
  });

  // Sticky Nav Bar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //Remove toggle icon and navbar when a link is clicked (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
});

// Toggle Icon NavBar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Reveal Function
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed JS
const typed = new Typed(".multiple-text", {
  strings: ["a Project Manager", "a Community Manager", "an Ambassador"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Current Year
const yearEl = document.querySelector(".year");

const date = new Date();
yearEl.textContent = date.getFullYear();
