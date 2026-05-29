document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  const sections = document.querySelectorAll('.category-section');
  const searchInput = document.getElementById('searchInput');
  
  // Guardar la categoría activa actual (por defecto '#todas')
  let currentCategory = '#todas';

  function filterCategory(targetId) {
    // Mostrar u ocultar secciones dependiendo de la selección
    sections.forEach(section => {
      if (targetId === '#todas' || '#' + section.id === targetId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });

    // Actualizar la clase 'active' para que se ilumine el enlace correcto en el menú
    sidebarLinks.forEach(link => {
      if (link.getAttribute('href') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Manejar clics en los enlaces del menú
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Evitar salto brusco de scroll por defecto
      const targetId = this.getAttribute('href');
      
      // Guardamos la categoría activa
      currentCategory = targetId;

      // Actualizar el hash en la URL sin recargar ni hacer salto brusco
      if (history.pushState) {
        history.pushState(null, null, targetId);
      } else {
        location.hash = targetId;
      }
      
      // Limpiar la barra de búsqueda y mostrar todas las tarjetas al cambiar de categoría
      if (searchInput) searchInput.value = '';
      document.querySelectorAll('.gem-card').forEach(card => card.style.display = 'flex');

      filterCategory(targetId);
      
      // En móviles, hacer scroll suave hacia las tarjetas de contenido
      if (window.innerWidth <= 768) {
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
          contentArea.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // En PC vuelve ligeramente hacia arriba
      }
    });
  });
  
  // Lógica de la barra de búsqueda
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();

      // Al buscar, si hay texto, destacamos temporalmente '#todas' en la UI
      if (query.length > 0) {
        sidebarLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#todas') link.classList.add('active');
        });

        // Mostrar todas las secciones para que se pueda buscar en todas las categorías
        sections.forEach(section => {
          let sectionHasVisibleCards = false;
          const cards = section.querySelectorAll('.gem-card');

          cards.forEach(card => {
            const textContent = card.textContent.toLowerCase(); 
            if (textContent.includes(query)) {
              card.style.display = 'flex';
              sectionHasVisibleCards = true;
            } else {
              card.style.display = 'none';
            }
          });

          // Mostramos solo las secciones que tengan resultados visibles
          section.style.display = sectionHasVisibleCards ? 'block' : 'none';
        });
      } else {
        // Si se limpia el texto de búsqueda, restauramos la categoría que estaba seleccionada antes de la búsqueda
        document.querySelectorAll('.gem-card').forEach(card => card.style.display = 'flex');
        filterCategory(currentCategory);
      }
    });
  }

  // Soporte de Deep Linking / URL Hash al cargar la página
  const initialHash = window.location.hash;
  const validHashes = Array.from(sidebarLinks).map(link => link.getAttribute('href'));
  
  if (initialHash && validHashes.includes(initialHash)) {
    currentCategory = initialHash;
    filterCategory(initialHash);
    
    // Si estamos en móvil y hay un hash inicial, scroll suave a la sección de contenido tras cargar
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
          contentArea.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  } else {
    filterCategory('#todas');
  }
});
