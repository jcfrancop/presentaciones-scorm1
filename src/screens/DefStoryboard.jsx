import { useState } from "react";

export default function DefStoryboard({ setCurrentScreen }) {
  const [showStoryboard, setShowStoryboard] = useState(false);

  const squemas = [
    {
      slide: 1,
      mensaje: "Una buena presentación comienza antes del diseño.",
      recurso: "Texto",
      notaDiseno: "Jerarquía visual",
    },
    {
      slide: 2,
      mensaje: "La información debe sintetizarse antes de diseñar.",
      recurso: "Imagen",
      notaDiseno: "Contraste",
    },
    {
      slide: 3,
      mensaje: "Cada diapositiva debe comunicar una idea principal.",
      recurso: "Dato",
      notaDiseno: "Alineación",
    },
  ];

  return (
    <section className="main-container">
      <div>
        <h1>Storyboard Narrativo</h1>
        <p>
          El storyboard es el guion visual de tu presentación. Se hace antes de
          abrir cualquier programa de diseño. Es simplemente escribir o dibujar
          qué va en cada slide.
        </p>
        {!showStoryboard && (
          <div>
            <h2>¿Por qué es importante?</h2>
            <p>
              Porque te obliga a tomar decisiones de contenido sin distracciones
              de diseño. Cuando el storyboard está listo, el diseño fluye.
            </p>
            <p>
              <b>Formato mínimo de storyboard:</b>
            </p>
            <ol style={{ padding: "2%" }}>
              <li>Número del slide</li>
              <li>Mensaje único (máx. 10 palabras)</li>
              <li>Tipo de contenido: texto, dato, imagen, gráfica, cita</li>
              <li>
                Nota de diseño: referencia al principio visual que aplicarás
              </li>
            </ol>
            <button onClick={() => setShowStoryboard(true)}>
              Crea el storyboard
            </button>
          </div>
        )}
        {showStoryboard && (
          <div className="storyBoard">
            {squemas.map((squema) => (
              <div className="slide" key={squema.slide}>
                <p>Diapositiva {squema.slide}</p>
                <p>
                  <b>Mensaje</b>
                </p>
                <p>{squema.mensaje}</p>
                <p>
                  <b>Tipo</b>
                </p>
                <p>{squema.recurso}</p>
                <p>
                  <b>Diseño</b>
                </p>
                <p>{squema.notaDiseno}</p>
              </div>
            ))}
            <button onClick={() => setCurrentScreen("question3")}>
              Siguiente
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
