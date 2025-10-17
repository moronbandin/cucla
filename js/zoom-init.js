document.addEventListener('DOMContentLoaded', function () {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      zoomable: true,       // 🔎 permite facer pinch ou scroll para máis zoom
      openEffect: 'zoom',
      closeEffect: 'zoom',
      slideEffect: 'slide'
    });
  });
  