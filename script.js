document.addEventListener("DOMContentLoaded", () => {
    // 1. MENU MOBILE
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => navLinks.classList.remove("open"));
    });

    // 2. COMPTE À REBOURS (5 Juin 2027 à 14h00)
    const weddingDate = new Date("June 5, 2027 14:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) return;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(3, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // 3. ANIMATIONS D'APPARITION AU SCROLL (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => {
        revealObserver.observe(el);
    });

    // 4. EFFET PARALLAXE LÉGER SUR LES ILLUSTRATIONS AU SCROLL
    const parallaxElements = document.querySelectorAll(".parallax");
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0.1;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }, { passive: true });

    // 5. ACCORDÉON FAQ
    document.querySelectorAll(".accordion-header").forEach(button => {
        button.addEventListener("click", () => {
            const item = button.parentElement;
            const body = item.querySelector(".accordion-body");
            const isActive = item.classList.contains("active");

            document.querySelectorAll(".accordion-item").forEach(i => {
                i.classList.remove("active");
                i.querySelector(".accordion-body").style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add("active");
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
});
