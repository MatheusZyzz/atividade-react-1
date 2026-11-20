import React from "react";
import { useState } from 'react';

export default function Accordion({ items }) {
  const [aberto, setAberto] = useState(null);
  return <section className="card"><h2>1. Acordeão (FAQ)</h2>
    {items.map((item, i) => <div className="faq" key={i}>
      <button aria-expanded={aberto === i} onClick={() => setAberto(aberto === i ? null : i)}>{item.pergunta} <span>{aberto === i ? '−' : '+'}</span></button>
      <div className={`resposta ${aberto === i ? 'visivel' : ''}`}>{item.resposta}</div>
    </div>)}
  </section>;
}
