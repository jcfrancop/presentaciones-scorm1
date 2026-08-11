export default function StoryBoard({ setCurrentScreen }) {
  return (
    <section className="main-container">
      <div>
        <h1>Definición de la narrativa</h1>
        <p>
          Ya sabes qué quieres decir. Ahora decides cómo lo dices. La estructura
          narrativa es el esqueleto de tu presentación — determina el orden en
          que tu audiencia recibe la información.
        </p>
        <h2>Cuatro estructuras que funcionan en presentaciones:</h2>

        <div className="card-info">
          <h3>SCR (Situación - Complicación - Resolución)</h3>
          <p>
            Contexto → problema → solución. Ideal para presentaciones de
            propuesta o pitch.
          </p>
        </div>
        <div className="card-info">
          <h3>Problema - Solución</h3>
          <p>
            Versión simplificada del SCR. Directa y efectiva para audiencias
            técnicas.
          </p>
        </div>
        <div className="card-info">
          <h3>Antes - Después</h3>
          <p>
            Muestra el estado actual y el estado deseado. Potente para
            presentaciones de cambio o transformación.
          </p>
        </div>
        <div className="card-info">
          <h3>Propuesta de valor</h3>
          <p>
            ¿Qué ofreces? ¿A quién? ¿Por qué importa? Para ventas y
            presentaciones de proyecto.
          </p>
        </div>
      </div>

      <button onClick={() => setCurrentScreen("message")}>Define el mensaje</button>
    </section>
  );
}
