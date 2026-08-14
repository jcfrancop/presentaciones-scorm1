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
  const [pointerPosition, setPointerPosition] = useState(null);

  // Constante que muestra si todas las fuentes fueron recolectadas
  const completed = sources.every((source) => source.collected);

  // -----------------------------
  // DRAG & DROP CON MOUSE
  // -----------------------------

  function handleDragStart(source) {
    setDragging(source);
  }

  function handleDrop() {
    if (!dragging) return;

    collectSource(dragging);

    setDragging(null);
  }

  // -----------------------------
  // SOPORTE PARA PANTALLAS TÁCTILES
  // -----------------------------

  function handlePointerDown(event, source) {
    // Solo usamos Pointer Events para dispositivos táctiles
    if (event.pointerType === "mouse") return;

    event.preventDefault();

    setDragging(source);

    setPointerPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  function handlePointerMove(event) {
    if (!dragging || event.pointerType === "mouse") return;

    event.preventDefault();

    setPointerPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  function handlePointerUp(event) {
    if (!dragging || event.pointerType === "mouse") return;

    event.preventDefault();

    const dropZone = document.querySelector(".collectedSources");

    if (!dropZone) {
      setDragging(null);
      setPointerPosition(null);
      return;
    }

    const rect = dropZone.getBoundingClientRect();

    const isInsideDropZone =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (isInsideDropZone) {
      collectSource(dragging);
    }

    setDragging(null);
    setPointerPosition(null);
  }

  // -----------------------------
  // RECOLECTAR FUENTE
  // -----------------------------

  function collectSource(source) {
    setSources((previousSources) =>
      previousSources.map((currentSource) => {
        if (currentSource.id === source.id) {
          return {
            ...currentSource,
            collected: true,
          };
        }

        return currentSource;
      })
    );
  }

  return (
    <section className="main-container">
      <div className="principal-content">

        <div className="content">
          {!completed ? (
            <div>
              <h1>Recopila todo el material</h1>

              <p>
                Arrastra cada pieza de información a la caja{" "}
                <strong>FUENTES</strong>.
              </p>
            </div>
          ) : (
            <div>
              <h1>¡Lo has conseguido!</h1>

              <p>
                Has reunido todas las fuentes de información.
              </p>
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
                  onPointerDown={(event) =>
                    handlePointerDown(event, source)
                  }
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  style={{
                    touchAction: "none",
                    cursor: dragging?.id === source.id
                      ? "grabbing"
                      : "grab",
                  }}
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
                  <div
                    key={source.id}
                    className="collected"
                  >
                    {source.label}
                  </div>
                ))}

            </div>
          </div>

        </div>

        <div className="buttons">
          {completed && (
            <button
              onClick={() => setCurrentScreen("question1")}
            >
              Siguiente
            </button>
          )}
        </div>

      </div>

      {/* Indicador visual durante el arrastre táctil */}
      {dragging && pointerPosition && (
        <div
          style={{
            position: "fixed",
            left: pointerPosition.x,
            top: pointerPosition.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9999,
            backgroundColor: "#f6eee3",
            border: "2px solid #e5cbba",
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: "600",
          }}
        >
          {dragging.label}
        </div>
      )}

    </section>
  );
}