
  // Smooth scrolling para navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

  // Función para simular descarga del PDF
  function downloadPDF() {
  alert('Funcionalidad de descarga: Aquí se integraría el PDF del plan de pruebas completo.\n\nEn un entorno real, esto abriría o descargaría el documento PDF con todo el plan detallado.');
}

  // Animaciones al hacer scroll
  const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

  // Aplicar animaciones a las cards
  document.querySelectorAll('.card, .metric-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});
