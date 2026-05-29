---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---


<div class="hero-section">
  <span class="hero-badge">✨ Recursos para Educadores</span>
  <h1>Tu sitio de GEMAS de GEMINI para profesores</h1>
  <p>
    En este sitio vas a poder acceder a preciosas <strong>gems de Gemini</strong> para poder hacer tu vida de educador un poco más fácil.
  </p>
  <!-- Buscador Integrado -->
  <div class="search-wrapper">
    <span class="search-icon-inside">🔍</span>
    <input type="text" id="searchInput" class="search-input" placeholder="Buscar gemas por nombre, descripción o palabra clave...">
  </div>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
            <h3><span class="gem-icon">{{ gem.icon }}</span> {{ gem.title }}</h3>
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
