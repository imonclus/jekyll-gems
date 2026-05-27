---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<style>
  /* Sobrescribir el ancho máximo del contenedor del tema por defecto de Jekyll */
  .wrapper {
    max-width: 1600px !important;
  }

  /* Ocultar el menú de navegación superior del tema de Jekyll */
  .site-nav {
    display: none !important;
  }

  /* --- Estilos del encabezado (Hero) --- */
  .hero-section { text-align: center; padding: 2rem 0; background-color: #f4f6f8; border-radius: 8px; margin-bottom: 2rem; }
  .hero-section h1 { color: #2c3e50; margin-bottom: 0.5rem; }
  .hero-section p { color: #596a7a; font-size: 1.2rem; max-width: 600px; margin: 0 auto; }

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
</style>

<div class="hero-section">
  <h1>Tu sitio de GEMAS de GEMINI para profesores</h1>
  <p>
    En este sitio vas a poder acceder a preciosas <strong>gems de Gemini</strong> para poder hacer tu vida de educador un poco más fácil.
  </p>
</div>

<div class="main-container">
  
  <!-- Menú Lateral (Sidebar) -->
  <aside class="sidebar">
    <h3>Categorías</h3>
    <ul>
      <li><a href="#evaluacion" class="active">📊 Evaluación, datos y calificación</a></li>
      <li><a href="#materiales" class="active">🗓️ Materiales didácticos y contenido</a></li>
      <li><a href="#integracion" class="active">💬 Uso e integración de la IA</a></li>
      <li><a href="#alfabetizacion" class="active">💬 Alfabetización, lectura, escritura y lenguaje</a></li>
      <li><a href="#herramientas" class="active">💬 Herramientas orientadas al estudiante</a></li>
      <li><a href="#recursos" class="active">💬 Recursos de apoyo y diferenciación</a></li>
      <li><a href="#planificacion" class="active">💬 Planificación de lecciones y diseño curricular</a></li>
      <li><a href="#participacion" class="active">💬 Participación y juegos</a></li>
      <li><a href="#tareas" class="active">💬 Tareas profesionales y administrativas</a></li>
      <li><a href="#ciencias" class="active">💬 Matemáticas, Ciencias y STEM</a></li>     
          
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
      <h2>🗓️ Materiales didácticos y contenido</h2>
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

    <!-- Categoría: Comunicación -->
    <section id="integracion" class="category-section">
      <h2>💬 Uso e integración de la IA</h2>
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
      <h2>💬 Alfabetización, lectura, escritura y lenguaje</h2>
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
      <h2>💬 Herramientas orientadas al estudiante</h2>
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
      <h2>💬 Recursos de apoyo y diferenciación</h2>
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
      <h2>💬 Planificación de lecciones y diseño curricular</h2>
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
      <h2>💬 Participación y juegos</h2>
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
      <h2>💬 Tareas profesionales y administrativas</h2>
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
      <h2>💬 Matemáticas, Ciencias y STEM</h2>
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