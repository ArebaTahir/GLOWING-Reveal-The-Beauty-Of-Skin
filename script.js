'use strict';



/**
 * add event on element
 */

const addEventOnElem = function(elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function() {
    if (window.scrollY > 150) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function() {
    if (lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }

    lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function() {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
            sections[i].classList.add("active");
        }
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

// ***
//  BLOG page //***//


const ourStoryLink = document.getElementById('our-story-link');
const ourStoryLinkBtn = document.getElementById('our-story-link-btn');
const ourStorySection = document.getElementById('our-story-section');

const ourBlogLink = document.getElementById('our-blog-link');
const ourBlogLinkBtn = document.getElementById('our-blog-link-btn');
const ourBlogSection = document.getElementById('our-blog-section');

const ourStoreLink = document.getElementById('our-store-link');
const ourStoreLinkBtn = document.getElementById('our-store-link-btn');
const ourStoreSection = document.getElementById('our-store-section');

// Function to show a section and hide others
function showSection(section) {
    hideAllSections();
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });

    // Automatically hide the section after 10 seconds (adjust the time as needed)
    setTimeout(function() {
        hideSection(section);
    }, 10000); // 10 seconds in milliseconds
}

// Function to hide all sections
function hideAllSections() {
    ourStorySection.style.display = 'none';
    ourBlogSection.style.display = 'none';
    ourStoreSection.style.display = 'none';
}

// Function to hide a specific section
function hideSection(section) {
    section.style.display = 'none';
}

// Event listeners for showing sections
ourStoryLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(ourStorySection);
});

ourStoryLinkBtn.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(ourStorySection);
});

ourBlogLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(ourBlogSection);
});

ourBlogLinkBtn.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(ourBlogSection);
});

ourStoreLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(ourStoreSection);
});

ourStoreLinkBtn.addEventListener('click', function(event) {
    event.preventDefault();
    showSection(ourStoreSection);
});

// Add event listeners to other clickable elements to hide all sections
document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', function() {
        hideAllSections();
    });
});