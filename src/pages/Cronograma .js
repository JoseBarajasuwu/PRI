import React from 'react'
import '../css/Cronograma.css';
export const Cronograma = () => {
  return (
    <div class="timeline-container">

      <div class="timeline-item">
        <div class="timeline-date">
          Enero 2024
        </div>
        <div class="timeline-content">
          <h2>Inicio del Proyecto</h2>
          <p>Se inicia la fase de planificación del proyecto, incluyendo la identificación de las necesidades y la definición de los objetivos.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">
          Marzo 2024
        </div>
        <div class="timeline-content">
          <h2>Primera Entrega</h2>
          <p>Entrega del primer informe sobre el progreso del proyecto y los primeros resultados obtenidos.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">
          Junio 2024
        </div>
        <div class="timeline-content">
          <h2>Fase de Implementación</h2>
          <p>Comienza la implementación de las soluciones planificadas, incluyendo el despliegue de recursos y la formación del personal.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">
          Diciembre 2024
        </div>
        <div class="timeline-content">
          <h2>Evaluación Final</h2>
          <p>Se realiza la evaluación final del proyecto, revisando los resultados y documentando las lecciones aprendidas.</p>
        </div>
      </div>
    </div>


  )
}
