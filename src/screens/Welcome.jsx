export default function Welcome({setCurrentScreen}) {
  return (
    <section className="main-container">
      <h1>El flujo de trabajo:</h1>
      <h1>Desde la investigación hasta el guion final</h1>
      <h2>Presentar bien no es inspiración, es proceso</h2>
      <button onClick={() => setCurrentScreen(1)}>
        Comenzar
      </button>
    </section>
  );
}
