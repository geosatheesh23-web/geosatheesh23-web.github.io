// script.js

// Function for smooth scrolling navigation
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add event listeners for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.8) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();
window.onclick = function(event) {
  if (!event.target.matches('button')) {
    var dropdowns = document.getElementsByClassName("content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".pagination a");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let pages = [
        "games.html",
        "games2.html",
        "games3.html",
        "games4.html",
        "games5.html"
    ];

    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") currentPage = "games.html";

    let currentIndex = pages.indexOf(currentPage);

    // Highlight active page
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Prev button
    if (currentIndex > 0) {
        prevBtn.href = pages[currentIndex - 1];
    } else {
        prevBtn.classList.add("active");
        prevBtn.removeAttribute("href");
    }

    // Next button
    if (currentIndex < pages.length - 1) {
        nextBtn.href = pages[currentIndex + 1];
    } else {
        nextBtn.classList.add("active");
        nextBtn.removeAttribute("href");
    }
});
