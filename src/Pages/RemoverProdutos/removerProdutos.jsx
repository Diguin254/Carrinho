import { useState, useEffect } from 'react';
import api from "../../Componentes/API/api";
import './removerProdutos.css';

export default function RemoverProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/produtos/ler').then(({ data }) => setProdutos(data));
  }, []);

  const deletar = async (id) => {
    if (!window.confirm('Tem certeza que deseja deletar este produto?')) return;
    try {
      await api.delete('/produtos/deletar', { data: { id } });
      setProdutos((prev) => prev.filter((x) => x.id !== id));
      alert('Produto removido com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao remover produto');
    }
  };

  return (
    <div>
      <div className='title'>
        <h2>Remover Produtos</h2>
      </div>
      <div className="lista-remover">
        {produtos.map((p) => (
          <div key={p.id} className="item-remover">
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <button onClick={() => deletar(p.id)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
}