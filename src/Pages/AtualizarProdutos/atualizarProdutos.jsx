import { useState, useEffect } from 'react';
import api from '../../Componentes/API/api';
import "./atualizarProdutos.css";

export default function AtualizarProdutos() {
  const [lista, setLista] = useState([]);
  const [selecionado, setSelecionado] = useState(null);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    api.get('/produtos/ler').then(({ data }) => setLista(data));
  }, []);

  useEffect(() => {
    if (selecionado) {
      setNome(selecionado.nome);
      setValor(selecionado.valor);
      setImagem(selecionado.imagem);
    }
  }, [selecionado]);

  const handleUpdate = async (e) => {
    e.preventDefault();
      await api.post('/produtos/atualizar', {
        id: selecionado.id,
        nome,
        valor: Number(valor),
        imagem,
      });
      alert('Produto atualizado com sucesso!');

  };

  return (
    <div className="update-card">
      <h2 className="card-title">Atualizar Produto</h2>

      <form onSubmit={handleUpdate} className="form-atualizarproduto">
        <label>
          Produto:
          <select
            value={selecionado?.id || ''}
            onChange={e =>
              setSelecionado(lista.find(p => p.id === +e.target.value))
            }
            required
          >
            <option value="" disabled>Selecione um produto…</option>
            {lista.map(p => (
              <option key={p.id} value={p.id}>
                {p.nome}
              </option>
            ))}
          </select>
        </label>

        {selecionado && (
          <>
            <label>
              Nome:
              <input
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
            </label>

            <label>
              Valor (R$):
              <input
                type="number"
                step="0.01"
                value={valor}
                onChange={e => setValor(e.target.value)}
                required
              />
            </label>

            <label>
              URL da imagem:
              <input
                type="url"
                value={imagem}
                onChange={e => setImagem(e.target.value)}
                required
              />
            </label>

            <div className="img-preview">
              <img src={imagem} alt="Preview" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>

            <button type="submit" className="btn-update">
              Atualizar
            </button>
          </>
        )}
      </form>
    </div>
  );
}
