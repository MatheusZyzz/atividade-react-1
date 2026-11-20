import { useEffect } from 'react';

export default function Toast({ mensagem, onClose }) {
  useEffect(() => {
    if (!mensagem) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [mensagem, onClose]);
  if (!mensagem) return null;
  return <div className="toast" role="status">{mensagem} <button aria-label="Fechar notificação" onClick={onClose}>×</button></div>;
}
