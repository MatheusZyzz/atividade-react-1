import React from "react";
export default function ProgressBar({ valor, onChange }) {
  return <section className="card"><h2>3. Barra de progresso</h2><p>Progresso: {valor}%</p>
    <div className="barra" role="progressbar" aria-label="Progresso" aria-valuenow={valor} aria-valuemin="0" aria-valuemax="100"><div style={{ width: `${valor}%` }} /></div>
    <button onClick={() => onChange(Math.min(100, valor + 20))}>Aumentar 20%</button>
    <button className="secundario" onClick={() => onChange(0)}>Reiniciar</button>
  </section>;
}
