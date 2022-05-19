import * as React from "react";

function toNumber(value) {
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Summary({ period, data }) {
  return (
    <>
      <h2>Sammanfattning</h2>
      <p>
        I {period} år, du kommer att ha {toNumber(data[data.length - 1].value)} kronor.
      </p>
      {/*<h3>Nedbrytning</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">Efter år</th>
            <th scope="col">Värde</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ label, value }) => (
            <tr key={label}>
              <td>{label}</td>
              <td>£{value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>*/}
    </>
  );
}

export default Summary;
