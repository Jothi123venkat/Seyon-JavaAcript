
const amusementImageUrls =  [
    './assets/images/amusement/AMUSEMENT-1.jpg',
    './assets/images/amusement/AMUSEMENT-2.jpg',
    './assets/images/amusement/AMUSEMENT-3.jpg',
    './assets/images/amusement/AMUSEMENT-4.jpg',
    './assets/images/amusement/AMUSEMENT-5.jpg',
    './assets/images/amusement/AMUSEMENT-6.jpg',
    './assets/images/amusement/AMUSEMENT-7.jpg',
    './assets/images/amusement/AMUSEMENT-8.jpg',
    './assets/images/amusement/AMUSEMENT-9.jpg',
    './assets/images/amusement/AMUSEMENT-10.jpg',
    './assets/images/amusement/AMUSEMENT-11.jpg',
    './assets/images/amusement/AMUSEMENT-12.jpg',
    './assets/images/amusement/AMUSEMENT-13.jpg',
    './assets/images/amusement/AMUSEMENT-14.jpg',
    './assets/images/amusement/AMUSEMENT-15.jpg',
    './assets/images/amusement/AMUSEMENT-16.jpg',
    './assets/images/amusement/AMUSEMENT-17.jpg',
];

let amusementCurrentImageUrl = '';
let amusementCurrentIndex = 0;

const amusementGallery = document.getElementById('amusement');
const amusementModalImage = document.getElementById('amusementModalImage');
const amusementPrevButton = document.getElementById('amusementprevButton');
const amusementNextButton = document.getElementById('amusementnextButton');

function showAmusementImage(index) {
    amusementCurrentImageUrl = amusementImageUrls[index];
    amusementModalImage.src = amusementCurrentImageUrl;
    amusementCurrentIndex = index;
}

amusementImageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Amusement Image';
    img.addEventListener('click', function () {
        showAmusementImage(index);
        $('#amusementModal').modal('show');
    });
    amusementGallery.appendChild(img);
});

amusementPrevButton.addEventListener('click', function() {
    amusementCurrentIndex = (amusementCurrentIndex - 1 + amusementImageUrls.length) % amusementImageUrls.length;
    showAmusementImage(amusementCurrentIndex);
});

amusementNextButton.addEventListener('click', function() {
    amusementCurrentIndex = (amusementCurrentIndex + 1) % amusementImageUrls.length;
    showAmusementImage(amusementCurrentIndex);
});
