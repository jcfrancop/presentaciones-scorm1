import { useState } from "react";

export default function Question2({ setCurrentScreen }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = {
    text: "Tienes 4 documentos sobre un mismo tema y poco tiempo. ¿Qué haces?",
    options: [
      {
        id: "a",
        text: "Le pido a la IA que elija los puntos más importantes y los incluyo directamente en mi presentación.",
        correct: false,
      },
      {
        id: "b",
        text: "Subo los documentos a Gemini Notebook, reviso los hallazgos que genera y yo decido cuáles son relevantes para mi mensaje.",
        correct: true,
      },
      {
        id: "c",
        text: "Leo todos los documentos completos antes de usar cualquier herramienta.  ",
        correct: false,
      },
    ],
  };

  function handleAnswer(option) {
    setSelectedAnswer(option);
  }

  return (
    <>
      <h2>{question.text}</h2>

      <div>
        {question.options.map((option) => (
          <button key={option.id} onClick={() => handleAnswer(option)}>
            {option.text}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <p>
          {selectedAnswer.correct
            ? "¡Correcto! La IA acelera el proceso de síntesis, pero la decisión editorial siempre es tuya."
            : "Respuesta incorrecta."}
        </p>
      )}

      {selectedAnswer?.correct && (
        <button onClick={() => setCurrentScreen("storyboard")}>
          Continuar
        </button>
      )}
    </>
  );
}
