export default function Pagination({ atual, total, onChange }) {
  return <section className="card"><h2>2. Paginação</h2><p>Você está na página {atual} de {total}.</p>
    <nav aria-label="Navegação de páginas" className="botoes">
      <button disabled={atual === 1} onClick={() => onChange(atual - 1)}>Anterior</button>
      {Array.from({ length: total }, (_, i) => <button key={i} aria-current={atual === i + 1 ? 'page' : undefined} className={atual === i + 1 ? 'ativo' : ''} onClick={() => onChange(i + 1)}>{i + 1}</button>)}
      <button disabled={atual === total} onClick={() => onChange(atual + 1)}>Próxima</button>
    </nav>
  </section>;
}
