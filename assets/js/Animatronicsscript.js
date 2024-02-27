
const animatronicsImageUrls =   [
    './assets/images/animatronics/ANIMATRONICS-1.jpg',
    './assets/images/animatronics/ANIMATRONICS-2.jpg',
    './assets/images/animatronics/ANIMATRONICS-3.jpg',
    './assets/images/animatronics/ANIMATRONICS-4.jpg',
    './assets/images/animatronics/ANIMATRONICS-5.jpg',
    './assets/images/animatronics/ANIMATRONICS-6.jpg',
    './assets/images/animatronics/ANIMATRONICS-7.jpg',
    './assets/images/animatronics/ANIMATRONICS-8.jpg',
    './assets/images/animatronics/ANIMATRONICS-9.jpg',
    './assets/images/animatronics/ANIMATRONICS-10.jpg',
];;

let animatronicsCurrentImageUrl = '';
let animatronicsCurrentIndex = 0;

const animatronicsGallery = document.getElementById('animatronics');
const animatronicsModalImage = document.getElementById('animatronicsModalImage');
const animatronicsPrevButton = document.getElementById('animatronicsprevButton');
const animatronicsNextButton = document.getElementById('animatronicsnextButton');

function showAnimatronicsImage(index) {
    animatronicsCurrentImageUrl = animatronicsImageUrls[index];
    animatronicsModalImage.src = animatronicsCurrentImageUrl;
    animatronicsCurrentIndex = index;
}

animatronicsImageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Animatronics Image';
    img.addEventListener('click', function () {
        showAnimatronicsImage(index);
        $('#animatronicsModal').modal('show');
    });
    animatronicsGallery.appendChild(img);
});

animatronicsPrevButton.addEventListener('click', function() {
    animatronicsCurrentIndex = (animatronicsCurrentIndex - 1 + animatronicsImageUrls.length) % animatronicsImageUrls.length;
    showAnimatronicsImage(animatronicsCurrentIndex);
});

animatronicsNextButton.addEventListener('click', function() {
    animatronicsCurrentIndex = (animatronicsCurrentIndex + 1) % animatronicsImageUrls.length;
    showAnimatronicsImage(animatronicsCurrentIndex);
});
