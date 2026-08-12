export default function FinalSteep({ setCurrentScreen }) {
  return (
    <section className="main-container">
      <div className="principal-content">
        <div className="content">
          <h1>El último paso</h1>
          <br/>
          <p>
            Con el storyboard listo, abres tu herramienta de diseño y aplicas
            los 5 principios del Módulo 1 sobre una estructura que ya tiene
            sentido.
            <br/>
            <br/>
            <strong>El orden importa</strong> primero estructura, luego diseño.
            Nunca al revés.
          </p>
          <br/>
          <p>
            <strong>Lo que evitas en ese orden:</strong>
            <ul style={{ padding: "2%" }}>
              <li>Cambiar el contenido cuando ya tienes el diseño avanzado.</li>
              <li>
                Diapositivas visualmente atractivas pero narrativamente vacías.
              </li>
              <li>La parálisis de la hoja en blanco — ya tienes un guion.</li>
            </ul>
          </p>
        </div>
        <button onClick={() => setCurrentScreen("final")}>Siguiente</button>
      </div>
    </section>
  );
}
