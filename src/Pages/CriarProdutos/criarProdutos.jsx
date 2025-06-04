import { useState } from 'react';
import api from "../../Componentes/API/api";
import { useNavigate } from 'react-router-dom';
import "./criarProdutos.css";

export default function CriarProdutos() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  const criar = async (e) => {
    e.preventDefault();
    await api.post('/produtos/criar', {
      nome,
      valor: Number(valor),
      imagem,
    });
    alert('Produto criado com sucesso!');
    navigate('/produtos/criar');
  };

  return (
    <div className="create-card">
      <h2 className="card-title">Criar Produto</h2>
      <form onSubmit={criar} className="form-criarproduto">
        <label>
          Nome do Produto
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Ex: SSD Kingston 1TB"
            required
          />
        </label>

        <label>
          Valor (R$)
          <input
            type="number"
            step="0.01"
            value={valor}
            onChange={e => setValor(e.target.value)}
            placeholder="Ex: 450.00"
            required
          />
        </label>

        <label>
          URL da Imagem
          <input
            type="url"
            value={imagem}
            onChange={e => setImagem(e.target.value)}
            placeholder="https://..."
            required
          />
        </label>

        <div className="img-preview">
          {imagem && (
            <img
              src={imagem}
              alt="Preview"
              onError={e => (e.currentTarget.style.display = 'none')}
            />
          )}
        </div>

        <button type="submit" className="btn-create">
          Criar Produto
        </button>
      </form>
    </div>
  );
}
