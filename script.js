// ==========================================
// PORTFOLIO WEBSITE - SCRIPT.JS
// Prince Kumar
// ==========================================


// ==========================================
// 1. TYPING ANIMATION
// ==========================================

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "Python Programmer",
    "AI Enthusiast",
    "Data Analyst"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


// ==========================================
// 2. MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // Mobile menu link click ke baad close
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });
}


// ==========================================
// 3. DARK / LIGHT MODE
// ==========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light-mode")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem("theme", "light");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem("theme", "dark");
        }
    });

    // Saved theme load karo
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        const icon = themeBtn.querySelector("i");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
}


// ==========================================
// 4. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================================
// 5. SKILL BAR ANIMATION
// ==========================================

const skillCards = document.querySelectorAll(".skill-card");

function animateSkills() {

    skillCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.classList.add("show");
        }

    });
}

window.addEventListener("scroll", animateSkills);

animateSkills();


// ==========================================
// 6. CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !subject || !message) {
            alert("Please fill all the fields.");
            return;
        }

        alert(
            "Thank you " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });
}


// ==========================================
// 7. SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================================
// 8. NAVBAR SCROLL EFFECT
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ==========================================
// 9. ACTIVE NAVIGATION LINK
// ==========================================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ==========================================
// 10. SCROLL TO TOP BUTTON
// ==========================================

const topButton = document.querySelector(".top-btn");

if (topButton) {

    topButton.addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==========================================
// 11. PROJECT CARD CLICK EFFECT
// ==========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});


// ==========================================
// 12. CURRENT YEAR
// ==========================================

const yearElement = document.querySelector(".footer-bottom strong");

if (yearElement) {
    // Name ko change nahi karna hai,
    // sirf year HTML mein already 2026 hai.
}


// ==========================================
// 13. PAGE LOADED
// ==========================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("Portfolio Website Loaded Successfully!");
    console.log("Welcome to Prince Kumar's Portfolio 🚀");

});