/* ==========================================================
   LA PANETIÈRE — js/main.js
   Interactividad de la página de Contáctanos:
   1) Aparición suave de secciones al hacer scroll (.reveal)
   2) Envío del formulario de contacto (sin backend todavía)
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1) Scroll-reveal ---------- */
  // Cualquier elemento con la clase "reveal" empieza invisible
  // (ver .reveal en styles.css) y recibe "is-visible" apenas
  // entra en el viewport, lo que dispara la animación fadeInUp.
  const revealTargets = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealTargets.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // solo una vez
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    });

    revealTargets.forEach((el) => revealObserver.observe(el));
  } else {
    // Navegadores muy antiguos: mostrar todo de inmediato
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- 2) Formulario de contacto ---------- */
  // NOTA IMPORTANTE: este formulario todavía no está conectado a
  // ningún backend ni servicio de correo. Solo valida los campos
  // en el navegador y muestra un mensaje de confirmación.
  // Para conectarlo de verdad, reemplaza el bloque marcado abajo
  // con tu propia llamada (fetch a tu API, Formspree, EmailJS, etc.).
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form && feedback) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // ---- AQUÍ conectarías tu backend real, por ejemplo: ----
      // const data = new FormData(form);
      // fetch('/api/contacto', { method: 'POST', body: data })
      //   .then(() => { ...mostrar éxito... })
      //   .catch(() => { ...mostrar error... });
      // ----------------------------------------------------------

      feedback.textContent = '¡Gracias! Tu mensaje fue recibido, te contactaremos muy pronto.';
      feedback.classList.add('is-visible');

      form.reset();

      // Oculta el mensaje después de unos segundos
      window.setTimeout(() => {
        feedback.classList.remove('is-visible');
      }, 6000);
    });
  }

});
