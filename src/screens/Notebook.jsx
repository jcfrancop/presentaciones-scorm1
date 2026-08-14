import { useState } from "react";

export default function Notebook({ setCurrentScreen }) {
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [sourcesProcessed, setSourcesProcessed] = useState(false);
  const [pointerPosition, setPointerPosition] = useState(null);

  function handleDragStart() {
    setDragging(true);
  }

  function handleDrop() {
    if (!dragging) return;

    processSources();
  }

  function processSources() {
    setDragging(false);
    setPointerPosition(null);
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setSourcesProcessed(true);
    }, 2000);
  }

  // -----------------------------
  // SOPORTE PARA PANTALLAS TÁCTILES
  // -----------------------------

  function handlePointerDown(event) {
    // Si es mouse, dejamos que funcione el Drag & Drop tradicional
    if (event.pointerType === "mouse") return;

    event.preventDefault();

    setDragging(true);

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

    const dropZone = document.querySelector(".geminiNotebook");

    if (!dropZone) {
      setDragging(false);
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
      processSources();
    } else {
      setDragging(false);
      setPointerPosition(null);
    }
  }

  return (
    <section className="main-container">
      <div className="principal-content">

        <div className="content">
          <h2>Síntesis con IA: Gemini Notebook</h2>

          <br />

          <p>
            Tienes más información de la que puedes procesar manualmente.
            Gemini Notebook te permite{" "}
            <b>subir tus fuentes y pedirle que identifique los hallazgos</b>{" "}
            más relevantes para tu tema.
          </p>

          <p>
            <b>Lo que hace Gemini Notebook:</b> lee y conecta múltiples
            documentos, genera resúmenes, responde preguntas sobre el
            contenido.
          </p>

          <p>
            <b>Lo que haces tú:</b> decides qué ideas son relevantes para tu
            presentación específica. La IA informa, tú decides.
          </p>

          <p>
            <i>Arrastra la caja de fuentes a Gemini Notebook</i>
          </p>
        </div>

        <div className="fonts-container">

          {!processing && !sourcesProcessed && (
            <div
              className="collectedSources readyToCollect"
              draggable
              onDragStart={handleDragStart}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              style={{
                touchAction: "none",
                cursor: dragging ? "grabbing" : "grab",
              }}
            >
              <h3>FUENTES</h3>
            </div>
          )}

          <div
            className="geminiNotebook"
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          >
            <img
              src="https://play-lh.googleusercontent.com/gQAp2_D_utKEdDI4Nr6_We5DAl2y7kPzoBKo8IE36rSDZyM_R5emL_t9zG4wHop8iMbFHzDVMlYKNTNSnzPCVw=w240-h480-rw"
              alt="gemini-notebook-logo"
            />

            {processing && <div>Procesando...</div>}
          </div>

          {sourcesProcessed && (
            <div className="sourcesSintetizedContainer">

              <div>───────►</div>

              <div className="sourcesSintetized">
                <h3>Fuentes sintenizadas</h3>
              </div>

              <button onClick={() => setCurrentScreen("question2")}>
                Siguiente
              </button>

            </div>
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
          FUENTES
        </div>
      )}

    </section>
  );
}