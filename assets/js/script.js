'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function() {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {

    if (window.scrollY >= 200) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }

});





/**
 * Add flip effect to gallery images on click
 */
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const galleryImage = this.querySelector('.gallery-image');
        galleryImage.classList.toggle('flip');
    });
});
// Example form validation
const form = document.querySelector('[data-form]');
form.addEventListener('submit', function(event) {
    const email = document.querySelector('[data-email]').value;
    if (!email.includes('@')) {
        event.preventDefault();
        // Prevent form submission
        alert('Please enter a valid email address.');
    }
});

// Scroll animation
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const checkVisibility = () => {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Run on page load
