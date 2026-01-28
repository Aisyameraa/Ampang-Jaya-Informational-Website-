// Typed.js initialization
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".auto-type", {
        strings: ["THE EMPIRE OF SELANGOR"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});

// Update last modified date in footer
document.addEventListener("DOMContentLoaded", function() {
    const date = new Date(document.lastModified);
    document.getElementById("last-updated").innerHTML = date.toLocaleDateString();
}
);

//culture js
document.addEventListener("DOMContentLoaded", () => {
    const date = new Date(document.lastModified);
    document.getElementById("last-updated").innerHTML = date.toLocaleDateString();

    let slideIndexes = {
        malay: 1,
        chinese: 1,
        indian: 1
    };

    function plusSlides(n, culture) {
        showSlides(slideIndexes[culture] += n, culture);
    }

    function currentSlide(n, culture) {
        showSlides(slideIndexes[culture] = n, culture);
    }

    function showSlides(n, culture) {
        let i;
        let slides = document.querySelectorAll(`#${culture}-slideshow .slides`);
        if (n > slides.length) { slideIndexes[culture] = 1; }
        if (n < 1) { slideIndexes[culture] = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndexes[culture] - 1].style.display = "block";
    }

    function autoSlide(culture) {
        plusSlides(1, culture);
        setTimeout(() => autoSlide(culture), 2500);
    }

    function initSlides() {
        showSlides(1, 'malay');
        showSlides(1, 'chinese');
        showSlides(1, 'indian');
        autoSlide('malay');
        autoSlide('chinese');
        autoSlide('indian');
    }

    initSlides();

    // Clickable functionality for images
    document.querySelectorAll('.slides').forEach((slideContainer, index) => {
        slideContainer.addEventListener('click', () => {
            plusSlides(1, ['malay', 'chinese', 'indian'][index]);
        });
    });
});

        // JavaScript to toggle FAQ answers
        document.querySelectorAll('.faqs li h3').forEach(item => {
            item.addEventListener('click', () => {
                const answer = item.nextElementSibling;
                answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
            });
        });
