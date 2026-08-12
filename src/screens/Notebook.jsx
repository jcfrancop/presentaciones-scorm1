import { useState } from "react";

export default function Notebook({ setCurrentScreen }) {
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [sourcesProcessed, setSourcesProcessed] = useState(false);

  function handleDrop() {
    if (!dragging) return;

    setDragging(false);
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setSourcesProcessed(true);
    }, 2000);
  }

  return (
    <section className="main-container">
      <div className="principal-content">
          <div className="content">
            <h2>Síntesis con IA: Gemini Notebook</h2>
            <br/>
            <p>
              Tienes más información de la que puedes procesar manualmente.
              Gemini Notebook te permite{" "}
              <b>subir tus fuentes y pedirle que identifique los hallazgos</b>{" "}
              más relevantes para tu tema.{" "}
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
                onDragStart={() => setDragging(true)}
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
                <div className="sourcesSintetized"><h3>Fuentes sintenizadas</h3></div>
                <button onClick={() => setCurrentScreen("question2")}>
            Siguiente
          </button>
              </div>
            )}
          </div>
      </div>
    </section>
  );
}
