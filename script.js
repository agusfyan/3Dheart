document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    for (let i = 1; i <= 100; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      container.appendChild(heart);
    }
  
    function animateHearts() {
      anime({
        targets: '.heart',
        translateX: function () {
          return anime.random(-700, 700);
        },
        translateY: function () {
          return anime.random(-500, 500);
        },
        rotate: 45,
        scale: function () {
          return anime.random(1, 5);
        },
        easing: 'easeInOutBack',
        duration: 3000,
        delay: anime.stagger(10),
        complete: function () {
          animateHearts();
        },
      });
    }
  
    function showPhoto() {
      const photoElement = document.createElement('img');
      photoElement.src = 'fotoq.jpg';
      photoElement.classList.add('photo', 'animate-rotation');
  
      container.appendChild(photoElement);
  
      animateHearts();
    }
  
    setTimeout(showPhoto, 1000);
  });
  