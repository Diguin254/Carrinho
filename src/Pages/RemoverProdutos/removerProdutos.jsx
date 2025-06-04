import { useState, useEffect } from 'react';
import api from "../../Componentes/API/api";
import './removerProdutos.css';

export default function RemoverProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/produtos/ler')
      .then(({ data }) => setProdutos(data))
      .catch(console.error);
  }, []);

  const deletar = async (id) => {
    if (!window.confirm('Tem certeza que deseja deletar este produto?'))
      return;
    try {
      await api.delete('/produtos/deletar', { data: { id } });
      setProdutos(prev => prev.filter(x => x.id !== id));
      alert('Produto removido com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao remover produto');
    }
  };

  return (
    <div className="remover-page">
      <h2 className="remover-title">Remover Produtos</h2>

      <div className="remover-grid">
        {produtos.map(p => (
          <div key={p.id} className="remover-card">
            <div className="remover-img">
              <img src={p.imagem} alt={p.nome} />
            </div>

            <div className="remover-body">
              <h3 className="remover-name">{p.nome}</h3>
            </div>

            <div className="remover-footer">
              <button className="remover-btn" onClick={() => deletar(p.id)}>
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
