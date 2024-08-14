import React from 'react'
import '../css/MainHome.css'
export const MainHome = () => {
  return (
    <div className="Home">
      <main>
        <div className="main-photo">
          <img src="meno.jpg" alt="Main" />
        </div>
        <div className="text-content">
          <h1>Gobierno de Tenamaxtlán</h1>
          <h2>Reseña histórica</h2>
          <p>
            El cacicazgo de Tenamaxtlán comprendía los poblados de Atengo, Ayutla, Soyotlán, Cuyutlán y Tepantla.
          </p>
          <p>
            En 1524-1525, Francisco Cortés de San Buenaventura conquistó esta región, dando encomiendas a Martín Monje y a Pedro Gómez en Tenamaxtlán.
            De Pedro Gómez no se sabe por cuanto tiempo conservó su encomienda; pero se tienen evidencias de que Martín Monje se instaló en Tenamaxtlán,
            y aunque estaba reconocido como vecino de Colima (en donde tenía casa), no tan sólo conservó su solar sino que lo agrandó llegando a poseer una vasta extensión que legó a sus descendientes.
          </p>
          <p>
            El poblado estuvo primitivamente en la Mesa de las Tablas, al noroeste de su actual sitio, por donde desaguaba la laguna.
            Posteriormente los aborígenes mudaron de lugar y se remontaron al cerrito de Ayutepec en donde sufrieron calamidades originadas por una inundación que rodeó al cerro
            , viéndose obligados a establecerse en el cerro de Bonete, en donde los encontraron los españoles.
          </p>
        </div>
        <div className="rectangle-image">
          <img src="001.jpg" alt="Rectangular" />
        </div>
        <div className="cta-text">
          <h3>¿Ya conoces Tenamaxtlán, Jalisco?</h3>
          <p>
            Naturaleza, paz y una riqueza cultural y arquitectónica única.
          </p>
        </div>

      </main>

    </div>
  )
}
