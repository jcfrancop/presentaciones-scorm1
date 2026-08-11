import { useState } from "react";

export default function Question1({ setCurrentScreen }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = {
    text: "¿Por qué es útil recopilar información en diferentes formatos antes de sintetizarla?",
    options: [
      {
        id: "a",
        text: "Porque cada formato puede aportar información diferente que ayuda a comprender mejor el tema.",
        correct: true,
      },
      {
        id: "b",
        text: "Porque todos los formatos contienen exactamente la misma información.",
        correct: false,
      },
      {
        id: "c",
        text: "Porque utilizar muchos formatos evita tener que analizar las fuentes.",
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
        <p>{selectedAnswer.correct ? "¡Correcto!" : "Respuesta incorrecta."}</p>
      )}

      {selectedAnswer?.correct && (
        <button onClick={() => setCurrentScreen("notebook")}>Continuar</button>
      )}
    </>
  );
}
