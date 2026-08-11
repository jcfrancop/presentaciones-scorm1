export default function Instructions({ setCurrentScreen }) {
  return (
    <section className="main-container">
      <div className="principal-content">
        <div className="content">
          <h1>Antes de empezar</h1>
          <br/>
          <p>
            En este recorrido aprenderás a organizar la información y
            convertirla en una estructura clara para tu presentación. Avanza por cada actividad, sigue las instrucciones y toma las
            decisiones que consideres más adecuadas. Recopilarás fuentes, las
            sintetizarás, definirás mensajes clave y construirás un storyboard.
          </p>
          <br/>
          <p>
            <b>
              Al finalizar tendrás una estructura lista para pasar al diseño.
            </b>
          </p>
        </div>
        <button onClick={() => setCurrentScreen("introduction")}>
          Siguiente
        </button>
      </div>
    </section>
  );
}
