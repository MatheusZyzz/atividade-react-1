import { useCallback, useState } from 'react';
import Accordion from './components/Accordion.jsx';
import Pagination from './components/Pagination.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Tabs from './components/Tabs.jsx';
import Dropdown from './components/Dropdown.jsx';
import Toast from './components/Toast.jsx';

export default function App() {
  const [pagina, setPagina] = useState(1);
  const [progresso, setProgresso] = useState(40);
  const [mensagem, setMensagem] = useState('');
  const fecharToast = useCallback(() => setMensagem(''), []);

  return <main className="container">
    <header><h1>Minha atividade React</h1><p>Exemplo simples com 6 componentes funcionando.</p></header>
    <div className="grade">
      <Accordion items={[{ pergunta: 'O que é React?', resposta: 'É uma biblioteca JavaScript para criar interfaces.' }, { pergunta: 'O que é um componente?', resposta: 'É uma parte reutilizável da página.' }]} />
      <Pagination atual={pagina} total={3} onChange={setPagina} />
      <ProgressBar valor={progresso} onChange={setProgresso} />
      <Tabs items={[{ titulo: 'Início', conteudo: 'Bem-vindo à primeira aba!' }, { titulo: 'Sobre', conteudo: 'Esta é uma atividade da disciplina de React.' }]} />
      <Dropdown opcoes={['Azul', 'Verde', 'Amarelo']} onSelect={opcao => setMensagem(`Você escolheu: ${opcao}`)} />
      <section className="card"><h2>6. Notificação Toast</h2><p>Clique para mostrar uma mensagem temporária.</p><button onClick={() => setMensagem('Operação realizada com sucesso!')}>Mostrar notificação</button></section>
    </div>
    <Toast mensagem={mensagem} onClose={fecharToast} />
  </main>;
}
