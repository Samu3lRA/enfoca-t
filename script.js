/*=========================================
            MENU RESPONSIVE
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

/*=========================================
        HEADER AL HACER SCROLL
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "none";

    }

});

/*=========================================
        ANIMACIÓN DE APARICIÓN
=========================================*/

const elements = document.querySelectorAll(
    ".tool-card, .blog-card, .about-card, .section-title, .newsletter-box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .15
});

elements.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/*=========================================
        EFECTO PARALLAX HERO
=========================================*/

const heroImage = document.querySelector(".hero-main");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

/*=========================================
        BOTÓN VOLVER ARRIBA
=========================================*/

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
        EFECTO HOVER TARJETAS
=========================================*/

const cards = document.querySelectorAll(".tool-card, .blog-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(37,99,235,.08),
            white 55%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "white";

    });

});

/*=========================================
        CONTADORES
=========================================*/

const counters = document.querySelectorAll(".hero-stats h3");

let started = false;

window.addEventListener("scroll", () => {

    if (started) return;

    const stats = document.querySelector(".hero-stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text);

            if (isNaN(number)) return;

            let current = 0;

            const increment = Math.ceil(number / 40);

            const interval = setInterval(() => {

                current += increment;

                if (current >= number) {

                    current = number;

                    clearInterval(interval);

                }

                if (text.includes("+")) {

                    counter.innerText = current + "+";

                }

                else if (text.includes("%")) {

                    counter.innerText = current + "%";

                }

                else {

                    counter.innerText = current;

                }

            }, 30);

        });

    }

});