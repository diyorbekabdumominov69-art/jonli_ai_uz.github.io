// ===============================
// JONLI AI
// Premium JavaScript
// ===============================

// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 700);
    }
});

// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".card,.price,.project,.faq-item,.about,.contact"
).forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

// Navbar Blur

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,5,5,.90)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "rgba(5,5,5,.65)";

    }

});

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = target / 80;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    };

    update();

});

// Smooth Button Animation

document.querySelectorAll(".btn,.btn2").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// FAQ

document.querySelectorAll(".faq-item").forEach(item => {

    item.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

// Floating Circle Effect

const circle = document.querySelector(".circle");

if (circle) {

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.clientX)/40;

let y=(window.innerHeight/2-e.clientY)/40;

circle.style.transform=`translate(${x}px,${y}px)`;

});

}

// Console

console.log("%cJONLI AI",
"color:#00d4ff;font-size:32px;font-weight:bold;");

console.log("Premium Website Loaded.");
