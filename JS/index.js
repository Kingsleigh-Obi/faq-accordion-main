const imageElements = document.querySelectorAll('.faq-plus-icon');
let moreParagraphs = document.querySelectorAll('.faq-details');

imageElements.forEach((image, index) => {
  image.addEventListener('click', () => {
    if(moreParagraphs[index].innerHTML === '') {
      let pargagraph = moreParagraphs[index];
      image.src = '/assets/images/icon-minus.svg';
      
      if(pargagraph === moreParagraphs[0]) {
        pargagraph.innerHTML = `Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.`;
      } else if(pargagraph === moreParagraphs[1]) {
        pargagraph.innerHTML = `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`;
      } else if(pargagraph === moreParagraphs[2]) {
        pargagraph.innerHTML = `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`;
      } else {
        pargagraph.innerHTML = `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.`;
      }
    } else {
      image.src = '/assets/images/icon-plus.svg';
      moreParagraphs[index].classList.add('js-more-description');
      moreParagraphs[index].innerHTML = '';
    }
  })
});
