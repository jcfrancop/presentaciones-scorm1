import { useState } from "react";

export default function Question3({ setCurrentScreen }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = {
    text: "¿Cuál es el problema?",
    options: [
      {
        id: "a",
        text: "El slide no tiene imagen asignada.",
        correct: false,
      },
      {
        id: "b",
        text: "El slide tiene cinco ideas distintas — viola la regla del mensaje único",
        correct: true,
      },
      {
        id: "c",
        text: "El slide debería ir al final, no al inicio.",
        correct: false,
      },
    ],
  };

  function handleAnswer(option) {
    setSelectedAnswer(option);
  }

  return (
    <section className="main-container">
      <div className="principal-content">
        <div className="content">
          <p>Revisa el siguiente borrador de storyboard:</p>
          <div className="slide">
            <p>Diapositiva 3</p>
            <p>Introducción</p>
            <p>Contexto del mercado</p>
            <p>Tendencias 2024</p>
            <p>Competidores y oportunidades</p>
          </div>
          <h2>{question.text}</h2>
          <br />
          <div className="question-container">
            <div>
              {question.options.map((option) => (
                <button key={option.id} className="q-button" onClick={() => handleAnswer(option)}>
                  {option.text}
                </button>
              ))}
            </div>
          </div>

          <div className="retroalimentation">
            {selectedAnswer && (
              <p>
                {selectedAnswer.correct
                  ? "¡Exacto! Cinco ideas = cinco slides. El storyboard debe descomponer esto antes de llegar al diseño."
                  : "Respuesta incorrecta."}
              </p>
            )}
          </div>
        </div>

        {selectedAnswer?.correct && (
          <button onClick={() => setCurrentScreen("finalSteep")}>
            Continuar
          </button>
        )}
      </div>
    </section>
  );
}
