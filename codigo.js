document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
  
      if (!groupHeader) return;
  
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');
  
      
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
     
      groupBody.classList.toggle('open');
  
      
      const otherGroups = faqContainer.querySelectorAll('.faq-group');
  
      otherGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          const otherGroupBody = otherGroup.querySelector('.faq-group-body');
          const otherIcon = otherGroup.querySelector('.faq-group-header i');
  
          otherGroupBody.classList.remove('open');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });


// Slideshow simple
const slides = document.querySelectorAll('.banner img');
let i = 0;

function showSlide() {
  slides.forEach(img => img.classList.remove('active'));
  slides[i].classList.add('active');
  i = (i + 1) % slides.length;
}

if (slides.length > 0) {
  showSlide(); // mostrar primero
  setInterval(showSlide, 4000); // cada 4s cambia
}