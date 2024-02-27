const imageUrls = [
    './assets/images/animation/ANIMATION-1.jpg',
    './assets/images/animation/ANIMATION-2.jpg',
    './assets/images/animation/ANIMATION-3.jpg',   
    './assets/images/animation/ANIMATION-4.jpg',
    './assets/images/animation/ANIMATION-5.jpg', 
    './assets/images/animation/ANIMATION-6.jpg',
    './assets/images/animation/ANIMATION-7.jpg',
    './assets/images/animation/ANIMATION-8.jpg',   
    './assets/images/animation/ANIMATION-9.jpg',
    './assets/images/animation/ANIMATION-10.jpg',
    './assets/images/animation/ANIMATION-11.jpg',
    './assets/images/animation/ANIMATION-12.jpg',
    './assets/images/animation/ANIMATION-13.jpg',   
    './assets/images/animation/ANIMATION-14.jpg',
    './assets/images/animation/ANIMATION-15.jpg', 
    './assets/images/animation/ANIMATION-16.jpg',
    './assets/images/animation/ANIMATION-17.jpg',
    './assets/images/animation/ANIMATION-18.jpg',   
    './assets/images/animation/ANIMATION-19.jpg',
    './assets/images/animation/ANIMATION-20.jpg',  
    './assets/images/animation/ANIMATION-21.jpg',
    './assets/images/animation/ANIMATION-22.jpg',
    './assets/images/animation/ANIMATION-23.jpg',   
    './assets/images/animation/ANIMATION-24.jpg',
    './assets/images/animation/ANIMATION-25.jpg',      
  ];


  const imageContainer = document.getElementById('imageContainer');
  const modalImage = document.getElementById('modalImage');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  let currentIndex = 0;

  function showImage(index) {
      modalImage.src = imageUrls[index];
      currentIndex = index;
  }

  imageUrls.forEach((url, index) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Image';
      img.addEventListener('click', function () {
          showImage(index);
          $('#imageModal').modal('show');
      });
      imageContainer.appendChild(img);
  });

  prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
      showImage(currentIndex);
  });

  nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % imageUrls.length;
      showImage(currentIndex);
  });
  
  function closeNavbar() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Check if the navbar is collapsed
    if (navbarCollapse.classList.contains('show')) {
        // Close the navbar
        navbarToggler.click();
    }
}