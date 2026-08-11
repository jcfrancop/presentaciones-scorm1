export default function Welcome({ setCurrentScreen }) {
  return (
    <section className="main-container">
      <div className="principal-content">
        <div className="content">
          <h1>El flujo de trabajo: Desde la investigación hasta el guion final</h1>
          <br/>
          <h2>Presentar bien no es inspiración, es proceso</h2>
        </div>
        <button onClick={() => setCurrentScreen("before")}>Comenzar</button>
      </div>
    </section>
  );
}
