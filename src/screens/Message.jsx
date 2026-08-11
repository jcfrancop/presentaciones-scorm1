export default function Message({ setCurrentScreen }) {
  return (
    <section className="main-container">
      <div>
        <h1>Un mensaje único por diapositiva</h1>

        <p>
          Este es el principio que más transforma una presentación: cada
          diapositiva tiene un solo mensaje. Un solo mensaje. No dos, no tres.
        </p>

        <p>
          <em>
            <b>
              La regla: máximo 10 palabras que expresen la idea central del
              slide.
            </b>
          </em>
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "Arial, sans-serif",
            fontSize: "16px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: "50%",
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  padding: "14px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                Ejemplo incorrecto
              </th>

              <th
                style={{
                  width: "50%",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  padding: "14px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                Ejemplo correcto
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                style={{
                  padding: "16px",
                  border: "1px solid #ddd",
                  verticalAlign: "top",
                }}
              >
                <em>
                  «Los datos muestran que el consumo ha crecido, hay nuevos
                  competidores y los márgenes están bajo presión.»
                </em>

                <br />
                <br />

                <strong>→ Tres ideas = tres slides.</strong>
              </td>

              <td
                style={{
                  padding: "16px",
                  border: "1px solid #ddd",
                  verticalAlign: "top",
                }}
              >
                <em>
                  «El margen operativo cayó un 12% en el último trimestre.»
                </em>

                <br />
                <br />

                <strong>→ Una idea = un slide.</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Después de defiir el mensaje, el siguiente paso es definir el <em><b>storyboard</b></em></p>
        <div>
          <button onClick={() => setCurrentScreen("def_story")}>
            Empieza con el Storyboard
          </button>
        </div>
      </div>
    </section>
  );
}
