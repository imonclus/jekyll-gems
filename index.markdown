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
  .btn-open { background: #8e44ad; color: #ffffff; }
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
      <li><a href="#comunicacion">💬 Comunicación</a></li>
    </ul>
  </aside>

  <!-- Contenido Principal -->
  <main class="content-area">
    
    <!-- Categoría: Evaluación -->
    <section id="evaluacion" class="category-section">
      <h2>📊 Evaluación, datos y calificación</h2>
      <div class="gems-grid">
        
        <div class="gem-card">
          <h3>🎥 YouTube Quiz</h3>
          <p>Crea cuestionarios interactivos a partir de cualquier video de YouTube usando la IA de Gemini.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Evaluación-datos-calificacion/youTube-quiz.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1id9pIZPJstwvi1cJzz_i5VS3_ezDFs-c?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>
        
        <div class="gem-card">
          <h3>📝 Preguntas sobre el texto</h3>
          <p>Genera un conjunto de preguntas específicas y rigurosas vinculadas directamente a un texto o contenido didáctico.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Evaluación-datos-calificacion/preguntas-dependen-texto.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1V8NPY42IcgvGlCjDiXP_B7718sGMUgN3?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>
        
        <div class="gem-card">
          <h3>📝 Comentarios sobre las tareas de los estudiantes</h3>
          <p>Genera un conjunto de comentarios sobre las tareas de los estudiantes.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Evaluación-datos-calificacion/comentarios-tareas-estudiantes.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1ws7gkLZMeTzBOhmQ_A2Gfb5MvDg-Ictl?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>

        <div class="gem-card">
          <h3>📝 Criterios de éxito unificados</h3>
          <p>Genera criterios de éxito unificados para una tarea específica.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Evaluación-datos-calificacion/criterios-exito-unificados.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1VTYkQZRabWDr_2LkGfeU87sGMzzWm6l3?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>

        <div class="gem-card">
          <h3>📝 Rúbrica</h3>
          <p>Genera rúbricas claras, alineadas con los estándares y prácticas.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Evaluación-datos-calificacion/rubrica.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1ZDd0giVmXTik72sdtqMuLMIa0K-4j5R0?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>

        <div class="gem-card">
          <h3>📝 Análisis de Mapa NWEA</h3>
          <p>Genera rúbricas claras, alineadas con los estándares y prácticas.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Evaluación-datos-calificacion/NWEA-analisis-de-mapa.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1ELnyIgY-U7l7zwYbWlyd2kzc-3Lm7CVg?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>

      </div>
      </section>

    <!-- Categoría: Materiales didácticos y contenido -->
    <section id="materiales" class="category-section">
      <h2>📊 Materiales didácticos y contenido</h2>
      <div class="gems-grid">

        <div class="gem-card">
          <h3>🎥 Hoja de trabajo</h3>
          <p>Crea hojas de trabajo para tus alumnos.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Materiales-didacticos-y-contenido/hoja-de-trabajo.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1MZsp3zJnAciQ2fIRQJn-pvmflVHBI6lG?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>

        <div class="gem-card">
          <h3>🎥 Listas de vocabulario</h3>
          <p>Crea hojas de trabajo para tus alumnos.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Materiales-didacticos-y-contenido/lista-vocabulario.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1824LJbkOZ3dEUSuMJn92oCI-BlnTR6WG?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>

        <div class="gem-card">
          <h3>🎥 Genera promts IA de vídeo</h3>
          <p>Crea promts de vídeo para IA.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Materiales-didacticos-y-contenido/generador-promts-vídeo.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/10RICZ7trWMpP8kwH6lRU-WNrGZ2HCvTI?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>   

        <div class="gem-card">
          <h3>🎥 Reescribir texto</h3>
          <p>Crea promts de vídeo para IA.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Materiales-didacticos-y-contenido/reescritor-texto.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1JkuvSMjFOxls0XLQjYyWHPZgs7rrzgir?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div> 

        <div class="gem-card">
          <h3>🎥 Escritor de historias</h3>
          <p>Crea historias para tus alumnos.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Materiales-didacticos-y-contenido/escritor-historias.md %}" class="btn btn-details">Detalles</a>
            <a href="https://gemini.google.com/gem/1E04ldLtLyNrRXpOycH5c59hmhfhXLBkW?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div> 

        <div class="gem-card">
          <h3>🎥 Actividad de clasificación</h3>
          <p>Crea historias para tus alumnos.</p>
          <div class="gem-actions">
            <a href="{% link gemas-gemini/Materiales-didacticos-y-contenido/actividad-clasificacion.md %}" class="btn btn-details">Detalles</a>
            <a href="hhttps://gemini.google.com/gem/1uWHtj7VAiXac0ZYgkQWHZgYFn_OOjPDs?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-open">Abrir Gema ↗</a>
          </div>
        </div>        
        
      </div>
    </section>

  </main>
</div>