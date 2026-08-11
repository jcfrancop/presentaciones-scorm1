export default function Introduction({ setCurrentScreen }) {
  return (
    <section className="main-container">
      <div className="principal-content">
        <div className="content">
          <h1>El levantamiento de información</h1>
          <br/>
          <p>
            Antes de escribir una sola palabra en tu presentación, necesitas
            saber qué quieres decir. El levantamiento es la fase de
            recopilación: juntas todo el material disponible sin filtrar
            todavía.
          </p>
          <br/>
          <p>
            <strong>¿Qué incluyes?</strong> Documentos, artículos, datos,
            apuntes, grabaciones, resultados de investigación.
          </p>
          <p>
            <strong>¿Qué evitas?</strong> Empezar a seleccionar o descartar en
            esta etapa. Primero reúnes, luego filtras.
          </p>
        </div>
        <button onClick={() => setCurrentScreen("dragfiles")}>
          Empieza a recopilar
        </button>
      </div>
    </section>
  );
}
