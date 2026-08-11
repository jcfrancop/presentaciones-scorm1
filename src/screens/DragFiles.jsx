import { useState } from "react";

export default function DragFiles({ setCurrentScreen }) {
  const [sources, setSources] = useState([
    { id: 1, label: "Documento", collected: false },
    { id: 2, label: "Artículo", collected: false },
    { id: 3, label: "Entrevista", collected: false },
    { id: 4, label: "Podcast", collected: false },
    { id: 5, label: "Video", collected: false },
    { id: 6, label: "Página web", collected: false }
  ]);

  const [dragging, setDragging] = useState(null);

  // Constante que muestra si todas las fuentes fueron recolectadas
  const completed = sources.every((source) => source.collected);

  function handleDragStart(source) {
    setDragging(source);
  }

  function handleDrop() {
    // Protección por si ocurre un Drop sin haber arrastrado nada
    if (!dragging) return;

    setSources((previousSources) =>
      previousSources.map((source) => {
        if (source.id === dragging.id) {
          return {
            ...source,
            collected: true,
          };
        }

        return source;
      })
    );

    setDragging(null);
  }

  return (
    <section className="main-container">
      <div className="principal-content">
        <div className="content">
          {!completed ? (
        <div>
          <h1>Recopila todo el material</h1>
          <p>Arrastra cada pieza de información a la caja <strong>FUENTES</strong>.</p>
        </div>
      ) : (
        <div>
          <h1>¡Lo has conseguido!</h1>
          <p>Has reunido todas las fuentes de información.</p>
        </div>
      )}
        </div>

      <div className="fonts-container">
        <div className="availableSources">
        {sources
          .filter((source) => !source.collected)
          .map((source) => (
            <div
              key={source.id}
              className="sourceCard"
              draggable
              onDragStart={() => handleDragStart(source)}
            >
              {source.label}
            </div>
          ))}
      </div>

      <div
        className="collectedSources"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <h3>FUENTES</h3>

        <div className="sourcesContainer">
          {sources
            .filter((source) => source.collected)
            .map((source) => (
              <div key={source.id} className="collected">
                {source.label}
              </div>
            ))}
        </div>
      </div>
      </div>

      <div className="buttons"> {completed && (
          <button onClick={() => setCurrentScreen("question1")}>
            Siguiente
          </button>
        )}
      </div>
      </div>
    </section>
  );
}