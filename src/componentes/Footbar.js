import React from 'react'
import '../css/Footbar.css';
export const Footbar = () => {
    return (
        <div>
            <div className="contact-container">
                <div className="contact-item logo">
                    <img src="logoT.png" alt="Logo" />
                </div>
                <div className="contact-item address">
                    <p>Calle Ejemplo 123, Tenamaxtlán, Jalisco</p>
                </div>
                <div className="contact-item phone">
                    <p>+52 123 456 7890</p>
                </div>
                <div className="contact-item email">
                    <p>contacto@tenamaxtlan.com</p>
                </div>
            </div>
            <div className="footer-text">
                <p>Administración 2021 - 2024 Gobierno Municipal de Tenamaxtlán.</p>
            </div>

        </div>

    )
}
