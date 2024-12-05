let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    slideIndex = n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

setInterval(nextSlide, 5000);

showSlide(0);