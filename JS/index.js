const imageElements = document.querySelectorAll('.faq-plus-icon');

let plusClicked = 'false';

imageElements.forEach((image) => {
  image.addEventListener('click', () => {
    if(plusClicked) {
      image.src = '/assets/images/icon-minus.svg';
    } else {
      image.src = '/assets/images/icon-plus.svg'
    }
    plusClicked = !plusClicked;
  })

  
});