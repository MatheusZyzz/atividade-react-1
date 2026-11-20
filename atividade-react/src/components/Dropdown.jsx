import { useEffect, useRef, useState } from 'react';

export default function Dropdown({ opcoes, onSelect }) {
  const [aberto, setAberto] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    function fora(event) { if (!ref.current?.contains(event.target)) setAberto(false); }
    document.addEventListener('mousedown', fora);
    return () => document.removeEventListener('mousedown', fora);
  }, []);
  return <section className="card"><h2>5. Menu suspenso</h2>
    <div className="dropdown" ref={ref}>
      <button aria-expanded={aberto} aria-haspopup="true" onClick={() => setAberto(!aberto)}>Escolher uma opção ▾</button>
      {aberto && <div className="menu">{opcoes.map(opcao => <button key={opcao} onClick={() => { onSelect(opcao); setAberto(false); }}>{opcao}</button>)}</div>}
    </div>
  </section>;
}
