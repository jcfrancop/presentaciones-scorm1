export default function Final({ setCurrentScreen }) {
  const resume = [
    { id: 1, label: "Levantamiento → " },
    { id: 2, label: "Síntesis con IA → " },
    { id: 3, label: "Narrativa → " },
    { id: 4, label: "Mensaje único → " },
    { id: 5, label: "Storyboard → " },
    { id: 6, label: "Diseño final" },
  ];

  return (
    <section className="main-container">
      <h1>El flujo completo en una mirada</h1>

      <div className="resume-container">
        {resume.map((item) => (
          <span key={item.id}>{item.label}</span>
        ))}
      </div>

      <p>
        En el siguiente recurso vas a aprender a usar Gemini Notebook para hacer
        la síntesis de múltiples documentos en minutos.
      </p>

      <button onClick={() => setCurrentScreen("welcome")}>Siguiente</button>
    </section>
  );
}
