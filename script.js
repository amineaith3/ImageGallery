// script.js
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    let currentIndex = 0;

    function updateGallery() {
        const offset = -currentIndex * 100;
        gallery.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : (images.length - 1);
        updateGallery();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });

    updateGallery();
});