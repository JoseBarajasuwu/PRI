import React from 'react'
import '../css/Contacto.css';
export const Contacto = () => {
    return (
        <div>
            <div class="contact-page">
                <h1>Equipo de Contacto</h1>

                <div class="contact-card">
                    <img src="xd.png" alt="Foto de Juan Pérez"/>
                        <div class="contact-info">
                            <h2>Juan Pérez</h2>
                            <p>Puesto: Director de Operaciones</p>
                            <p>Ubicación: Edificio A, Piso 3</p>
                            <p>Oficina: 301</p>
                        </div>
                </div>

                <div class="contact-card">
                    <img src="xd.png" alt="Foto de Ana Gómez"/>
                        <div class="contact-info">
                            <h2>Ana Gómez</h2>
                            <p>Puesto: Gerente de Finanzas</p>
                            <p>Ubicación: Edificio B, Piso 2</p>
                            <p>Oficina: 202</p>
                        </div>
                </div>

                <div class="contact-card">
                    <img src="a.jpg" alt="Foto de Carlos Ramírez"/>
                        <div class="contact-info">
                            <h2>Carlos Ramírez</h2>
                            <p>Puesto: Jefe de Recursos Humanos</p>
                            <p>Ubicación: Edificio C, Piso 1</p>
                            <p>Oficina: 101</p>
                        </div>
                </div>
            </div>


        </div>
    )
}
