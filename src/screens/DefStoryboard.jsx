export default function DefStoryboard({ setCurrentScreen }) {
  return (
    <section className="main-container">
      <div>
        <h1>Storyboard Narrativo</h1>
        <p>
          El storyboard es el guion visual de tu presentación. Se hace antes de
          abrir cualquier programa de diseño. Es simplemente escribir o dibujar
          qué va en cada slide.
        </p>
        <h2>¿Por qué es importante?</h2>
        <p>Porque te obliga a tomar decisiones de contenido sin distracciones de diseño. Cuando el storyboard está listo, el diseño fluye.</p>
        <p><b>Formato mínimo de storyboard:</b></p>
        <ol style={{padding:"2%"}}>
          <li>Número del slide</li>
          <li>Mensaje único (máx. 10 palabras)</li>
          <li>Tipo de contenido: texto, dato, imagen, gráfica, cita</li>
          <li>Nota de diseño: referencia al principio visual que aplicarás</li>
        </ol>
        <div>
          <button onClick={() => setCurrentScreen("def_story")}>
            Crea el storyboard
          </button>

          <button onClick={() => setCurrentScreen("welcome")}>
            Volver al inicio
          </button>
        </div>
      </div>
    </section>
  );
}
