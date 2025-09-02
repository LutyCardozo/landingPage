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



const formulario = document.querySelector("form[name=newsletter-form]");

formulario.addEventListener("submit", cambioAsunto);

function cambioAsunto() {
  const asunto = document.querySelector("[input name=subject]");
  const nombre = document.querySelector("[input name=nombre]");
  asunto.value = "%{submissionId} - Consulta de "+nombre.value+" en el formulario %{formName}";
}

// Seleccionamos el formulario usando su atributo `name`
/* const form = document.forms['newsletter-form'];

// Si el formulario existe, agregamos un "escuchador" de eventos
if (form) {
    form.addEventListener('submit', function(event) {
        // Esto evita que la página se recargue
        event.preventDefault();

        // Creamos un nuevo objeto FormData para capturar los datos del formulario
        const formData = new FormData(form);

        // Simulamos el envío a Netlify (Netlify procesa esto automáticamente)
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(() => {
            // Cuando el envío es exitoso, mostramos el mensaje
            const successMessage = document.createElement('p');
            successMessage.textContent = '¡Formulario enviado con éxito!';
            successMessage.style.color = 'green';
            successMessage.style.marginTop = '15px';
            
            // Agregamos el mensaje justo después del formulario
            form.after(successMessage);
            
            // Opcional: Limpiamos los campos del formulario
            form.reset();
        })
        .catch((error) => {
            // En caso de error, mostramos un mensaje
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        });
    });
} */