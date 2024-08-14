import React from 'react'
import '../css/Noticias.css';
export const Noticias = () => {
    return (
        <div className="Noticias">
            <div class="news-container">
               

                <div class="news-item">
                    <h2>Título de la Noticia 1</h2>
                    <p>Fecha: 13 de agosto, 2024</p>
                    <p>Descripción breve de la noticia 1. Esta es una descripción corta que da una idea general de lo que trata la noticia.</p>
                    {/* <a href="#">Leer más...</a> */}
                </div>

                <div class="news-item">
                    <h2>Título de la Noticia 2</h2>
                    <p>Fecha: 12 de agosto, 2024</p>
                    <p>Descripción breve de la noticia 2. Aquí puedes dar un pequeño adelanto del contenido de la noticia.</p>
                    {/* <a href="#">Leer más...</a> */}
                </div>

                <div class="news-item">
                    <h2>Título de la Noticia 3</h2>
                    <p>Fecha: 11 de agosto, 2024</p>
                    <p>Descripción breve de la noticia 3. Un resumen o una introducción a lo que trata la noticia.</p>
                    {/* <a>Leer más...</a> */}
                </div>
            </div>
        </div>


    )
}
