document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem('username');
  if (username) {
      document.getElementById('username').textContent = username;
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  
    function nextImage() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      showImage(currentIndex);
    }
    showImage(currentIndex);
  
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
  
    setInterval(nextImage, 4000);
    ScrollReveal().reveal('.hide', {
      duration: 1000,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out'
  });
});

function ExpNow() {
    var hideElements = document.getElementsByClassName('hide');
    for (var i = 0; i < hideElements.length; i++) {
        if (hideElements[i].style.display === 'none') {
            hideElements[i].style.display = 'block';
            hideElements[i].style.visibility = 'visible';
        } else {
            hideElements[i].style.display = 'none';
            hideElements[i].style.visibility = 'hidden';
        }
    }
    window.scrollTo(0,2520)
} 

const sections = document.querySelectorAll("[data-section]");
  const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
      if (
        sections[i].getBoundingClientRect().top <
        window.innerHeight / 1.5
      ) {
        sections[i].classList.add("active");
      } else {
        sections[i].classList.remove("active");
      }
    }
  };
  
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollUpBtn").style.display = "block";
    } else {
      document.getElementById("scrollUpBtn").style.display = "none";
    }
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  scrollUpBtn.addEventListener("click", scrollToTop);