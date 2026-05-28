---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---
<style>
  /* --- Estilos del encabezado (Hero y Buscador integrados) --- */
  .hero-section { text-align: center; padding: 1.5rem 1rem; background-color: #f4f6f8; border-radius: 8px; margin-bottom: 1.5rem; }
  .hero-section h1 { color: #2c3e50; margin-bottom: 0.25rem; font-size: 1.8rem; }
  .hero-section p { color: #596a7a; font-size: 1.05rem; max-width: 600px; margin: 0 auto 1.2rem auto; }
  .search-input { width: 100%; max-width: 600px; padding: 0.8rem 1.5rem; font-size: 1rem; border: 2px solid #e1e8ed; border-radius: 30px; outline: none; transition: border-color 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
  .search-input:focus { border-color: #3498db; box-shadow: 0 4px 12px rgba(52, 152, 219, 0.2); }

  /* --- Contenedor general del layout --- */
  .main-container { display: flex; flex-wrap: wrap; gap: 2.5rem; align-items: flex-start; }

  /* --- Estilos de la barra lateral (Sidebar) --- */
  .sidebar { flex: 1 1 250px; position: sticky; top: 2rem; background: #fdfdfd; padding: 1.5rem; border-radius: 8px; border: 1px solid #e1e8ed; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
  .sidebar h3 { margin-top: 0; color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 0.5rem; }
  .sidebar ul { list-style: none; padding: 0; margin: 0; font-size: 1.05rem; }
  .sidebar li { margin-bottom: 0.8rem; }
  .sidebar a { text-decoration: none; color: #7f8c8d; }
  .sidebar a.active { color: #2980b9; font-weight: bold; }

  /* --- Estilos del contenido principal --- */
  .content-area { flex: 3 1 300px; }
  .category-section { margin-bottom: 3.5rem; scroll-margin-top: 2rem; }
  .category-section h2 { color: #34495e; border-bottom: 1px solid #e1e8ed; padding-bottom: 0.5rem; }
  .gems-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1.5rem; }

  /* --- Estilos de las cajas (Cards) --- */
  .gem-card { padding: 1.5rem; background: #ffffff; border: 1px solid #e1e8ed; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; flex-direction: column; }
  .gem-card h3 { margin-top: 0; color: #2980b9; }
  .gem-card p { margin-bottom: 1.5rem; color: #7f8c8d; flex-grow: 1; }

  /* --- Estilos de los botones --- */
  .gem-actions { display: flex; gap: 0.5rem; }
  .btn { flex: 1; text-align: center; text-decoration: none; padding: 0.6rem; border-radius: 4px; font-weight: bold; font-size: 0.9rem; }
  .btn-details { background: #ecf0f1; color: #2c3e50; }
  .btn-open, .btn-open:visited { background: #8e44ad; color: #ffffff; }

  /* --- Media Query para Responsividad en Móviles --- */
  @media (max-width: 768px) {
    .sidebar {
      position: static; /* Desactivar el 'sticky' en móvil */
      max-height: 40vh; /* Limitar altura y hacerla scrollable */
      overflow-y: auto;
    }
  }
</style>

<div class="hero-section">
  <h1>Tu sitio de GEMAS de GEMINI para profesores</h1>
  <p>
    En este sitio vas a poder acceder a preciosas <strong>gems de Gemini</strong> para poder hacer tu vida de educador un poco más fácil.
  </p>
  <!-- Buscador Integrado -->
  <input type="text" id="searchInput" class="search-input" placeholder="🔍 Buscar gemas por nombre, descripción o palabra clave...">
</div>

<div class="main-container">
  
  <!-- Menú Lateral (Sidebar) -->
  <aside class="sidebar">
    <h3>Categorías</h3>
    <ul>
      <li><a href="#todas" class="active">🌟 Todas las categorías</a></li>
      <li><a href="#evaluacion">📊 Evaluación, datos y calificación</a></li>
      <li><a href="#materiales"> 📚 Materiales didácticos y contenido</a></li>
      <li><a href="#integracion">🤖 Uso e integración de la IA</a></li>
      <li><a href="#alfabetizacion">📖 Alfabetización, lectura, escritura y lenguaje</a></li>
      <li><a href="#herramientas">🎒 Herramientas orientadas al estudiante</a></li>
      <li><a href="#recursos">🧩 Recursos de apoyo y diferenciación</a></li>
      <li><a href="#planificacion">📋 Planificación de lecciones y diseño curricular</a></li>
      <li><a href="#participacion">🎮 Participación y juegos</a></li>
      <li><a href="#tareas">💼 Tareas profesionales y administrativas</a></li>
      <li><a href="#ciencias">🔬 Matemáticas, Ciencias y STEM</a></li>     
    </ul>
  </aside>

  <!-- Contenido Principal -->
  <main class="content-area">
    {% assign all_gems = site.pages | where_exp: "item", "item.path contains 'gemas-gemini/'" %}
    
    <!-- Categoría: Evaluación -->
    <section id="evaluacion" class="category-section">
      <h2>📊 Evaluación, datos y calificación</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Evaluación, datos y calificación" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
      </section>

    <!-- Categoría: Materiales didácticos y contenido -->
    <section id="materiales" class="category-section">
      <h2>📚 Materiales didácticos y contenido</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Materiales didácticos y contenido" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>

    <!-- Categoría: Uso e integración de la IA-->
    <section id="integracion" class="category-section">
      <h2>🤖 Uso e integración de la IA</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Uso e integración de la IA" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>
    
    <!-- Categoría: Alfabetización -->
    <section id="alfabetizacion" class="category-section">
      <h2>📖 Alfabetización, lectura, escritura y lenguaje</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Alfabetización, lectura, escritura y lenguaje" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>

    <!-- Categoría: Herramientas -->
    <section id="herramientas" class="category-section">
      <h2>🎒 Herramientas orientadas al estudiante</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Herramientas orientadas al estudiante" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>

    <!-- Categoría: Recursos -->
    <section id="recursos" class="category-section">
      <h2>🧩 Recursos de apoyo y diferenciación</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Recursos de apoyo y diferenciación" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>

    <!-- Categoría: Planificación de lecciones y diseño curricular -->
    <section id="planificacion" class="category-section">
      <h2>📋 Planificación de lecciones y diseño curricular</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Planificación de lecciones y diseño curricular" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>

    <!-- Categoría: Participación y juegos -->
    <section id="participacion" class="category-section">
      <h2>🎮 Participación y juegos</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Participación y juegos" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section> 

    <!-- Categoría: Tareas profesionales y administrativas -->
    <section id="tareas" class="category-section">
      <h2>💼 Tareas profesionales y administrativas</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Tareas profesionales y administrativas" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>     

    <!-- Categoría: Matemáticas, Ciencias y STEM -->
    <section id="ciencias" class="category-section">
      <h2>🔬 Matemáticas, Ciencias y STEM</h2>
      <div class="gems-grid">
        {% assign category_gems = all_gems | where: "category", "Matemáticas, Ciencias y STEM" | sort: "title" %}
        {% for gem in category_gems %}
          <div class="gem-card">
            <h3>{{ gem.icon }} {{ gem.title }}</h3>
            <p>{{ gem.description }}</p>
            <div class="gem-actions">
              <a href="{{ gem.url | relative_url }}" class="btn btn-details">Detalles</a>
              <a href="{{ gem.gem_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>   

  </main>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.category-section');
    const searchInput = document.getElementById('searchInput');

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
        e.preventDefault(); // Evitar el salto brusco hacia abajo
        const targetId = this.getAttribute('href');
        
        // Limpiar la barra de búsqueda y mostrar todas las tarjetas al cambiar de categoría
        if(searchInput) searchInput.value = '';
        document.querySelectorAll('.gem-card').forEach(card => card.style.display = 'flex');

        filterCategory(targetId);
        
        // En móviles, hacer scroll suave hacia las tarjetas de contenido
        if (window.innerWidth <= 768) {
          document.querySelector('.content-area').scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' }); // En PC vuelve ligeramente hacia arriba
        }
      });
    });
    
    // Lógica de la barra de búsqueda
    if(searchInput) {
      searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
  
        // Al buscar, marcamos "Todas las categorías" como activa en el menú
        if (query.length > 0) {
          sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#todas') link.classList.add('active');
          });
        } else {
          // Si se borra el texto, volver a la vista de "Todas" por defecto
          filterCategory('#todas'); 
        }
  
        sections.forEach(section => {
          let sectionHasVisibleCards = false;
          const cards = section.querySelectorAll('.gem-card');
  
          cards.forEach(card => {
            // "textContent" extrae todo el texto (título y descripción) dentro de la tarjeta
            const textContent = card.textContent.toLowerCase(); 
            if (textContent.includes(query)) {
              card.style.display = 'flex';
              sectionHasVisibleCards = true;
            } else {
              card.style.display = 'none';
            }
          });
  
          // Si estamos buscando, solo mostramos los bloques de categoría que tienen al menos un resultado
          if (query.length > 0) {
            section.style.display = sectionHasVisibleCards ? 'block' : 'none';
          }
        });
      });
    }

    // Por defecto al cargar la página, mostrar todas las categorías
    filterCategory('#todas');
  });
</script>