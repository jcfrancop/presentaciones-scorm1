export default function Introduction({ setCurrentScreen }) {
  return (
    <section className="main-container">
      <h2>El levantamiento de información</h2>
      <p>
        Antes de escribir una sola palabra en tu presentación, necesitas saber
        qué quieres decir. El levantamiento es la fase de recopilación: juntas
        todo el material disponible sin filtrar todavía.
      </p>
      <p>
        <strong>¿Qué incluyes?</strong> Documentos, artículos, datos, apuntes,
        grabaciones, resultados de investigación.
      </p>
      <p>
        <strong>¿Qué evitas?</strong> Empezar a seleccionar o descartar en esta
        etapa. Primero reúnes, luego filtras.
      </p>
      <button onClick={() => setCurrentScreen(2)}>Empieza a recopilar</button>
    </section>
  );
}
