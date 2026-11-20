import { useState } from 'react';

export default function Tabs({ items }) {
  const [ativa, setAtiva] = useState(0);
  return <section className="card"><h2>4. Abas</h2>
    <div role="tablist" aria-label="Informações" className="botoes">
      {items.map((item, i) => <button key={i} role="tab" aria-selected={ativa === i} className={ativa === i ? 'ativo' : ''} onClick={() => setAtiva(i)}>{item.titulo}</button>)}
    </div>
    <p role="tabpanel">{items[ativa].conteudo}</p>
  </section>;
}
