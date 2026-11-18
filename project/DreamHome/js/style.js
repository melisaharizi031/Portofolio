const menuToggle = document.querySelector(".toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
    function closeMenu() {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

document.querySelectorAll(".property-carousel").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".property-carousel__slide"));
    const indicators = Array.from(carousel.querySelectorAll(".property-carousel__indicators button"));
    const previousButton = carousel.querySelector(".property-carousel__arrow--previous");
    const nextButton = carousel.querySelector(".property-carousel__arrow--next");
    let activeIndex = 0;

    function showSlide(index) {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === activeIndex;
            slide.hidden = !isActive;
            slide.classList.toggle("is-active", isActive);
            indicators[slideIndex].classList.toggle("is-active", isActive);

            if (isActive) {
                indicators[slideIndex].setAttribute("aria-current", "true");
            } else {
                indicators[slideIndex].removeAttribute("aria-current");
            }
        });
    }

    previousButton.addEventListener("click", () => showSlide(activeIndex - 1));
    nextButton.addEventListener("click", () => showSlide(activeIndex + 1));

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => showSlide(index));
    });
});