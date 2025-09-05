document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  const faqContainer = document.querySelector('.faq-content');

  if (faqContainer) {
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');

      if (!groupHeader) return;

      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');

      // Toggle current FAQ group
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
      groupBody.classList.toggle('open');

      // Close other FAQ groups
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
  }

  // Mobile Menu Toggle
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburgerButton && mobileMenu) {
    hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Slideshow
  const slides = document.querySelectorAll('.banner img');
  let slideIndex = 0;

  function showSlide() {
    slides.forEach((img) => img.classList.remove('active'));
    slides[slideIndex].classList.add('active');
    slideIndex = (slideIndex + 1) % slides.length;
  }

  if (slides.length > 0) {
    showSlide(); // Show the first slide
    setInterval(showSlide, 4000); // Change slide every 4 seconds
  }

  // Newsletter Form Submission
  const newsletterForm = document.querySelector("form[name='newsletter-form']");

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      const subjectInput = newsletterForm.querySelector("input[name='subject']");
      const nameInput = newsletterForm.querySelector("input[name='nombre']");

      if (subjectInput && nameInput) {
        subjectInput.value = `%{submissionId} - Consulta de ${nameInput.value} en el formulario %{formName}`;
      }
    });
  }
});