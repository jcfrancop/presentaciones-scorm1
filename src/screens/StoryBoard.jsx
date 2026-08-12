export default function StoryBoard({ setCurrentScreen }) {
  return (
    <section className="main-container">
      <div className="principal-content">
        <div className="content">
          <h2>Definición de la narrativa</h2>
          <br/>
        <p>
          Ya sabes qué quieres decir. Ahora decides cómo lo dices. La estructura
          narrativa es el esqueleto de tu presentación — determina el orden en
          que tu audiencia recibe la información.
        </p>
        <h3>Cuatro estructuras que funcionan en presentaciones:</h3>
        <div className="cards-container">
          

        <div className="card-info">
          <h4>SCR (Situación - Complicación - Resolución)</h4>
          <p>
            Contexto→problema→solución. Ideal para presentaciones de
            propuesta o pitch.
          </p>
        </div>
        <div className="card-info">
          <h4>Problema - Solución</h4>
          <p>
            Versión simplificada del SCR. Directa y efectiva para audiencias
            técnicas.
          </p>
        </div>
        <div className="card-info">
          <h4>Antes - Después</h4>
          <p>
            Muestra el estado actual y el estado deseado. Potente para
            presentaciones de cambio o transformación.
          </p>
        </div>
        <div className="card-info">
          <h4>Propuesta de valor</h4>
          <p>
            ¿Qué ofreces? ¿A quién? ¿Por qué importa? Para ventas y
            presentaciones de proyecto.
          </p>
        </div>
        </div>
        </div>
      </div>

      <button onClick={() => setCurrentScreen("message")}>Define el mensaje</button>
    </section>
  );
}
