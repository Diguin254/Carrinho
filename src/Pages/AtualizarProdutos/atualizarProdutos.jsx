import { useState, useEffect } from 'react';
import api from '../../Componentes/API/api';
import "./atualizarProdutos.css";

export default function AtualizarProdutos() {
  const [lista, setLista] = useState([]);
  const [selecionado, setSelecionado] = useState(null);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => { api.get('/produtos/ler').then(({ data }) => setLista(data)); }, []);

  useEffect(() => {
    if (selecionado) {
      setNome(selecionado.nome);
      setValor(selecionado.valor);
      setImagem(selecionado.imagem);
    }
  }, [selecionado]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.post('/produtos/atualizar', {
        id: selecionado.id,
        nome,
        valor: Number(valor),
        imagem,
      });
      alert('Produto atualizado com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao atualizar produto');
    }
  };

  return (
    <form onSubmit={handleUpdate} className="form-atualizarproduto">
      <div className='title'>
        <h2>Atualizar Produto</h2>
      </div>
      <select onChange={(e) => setSelecionado(lista.find((p) => p.id === Number(e.target.value)))} required>
        <option className='opcao' value="">Selecione um produto</option>
        {lista.map((p) => (
          <option key={p.id} value={p.id}>
            {p.nome}
            <img src={p.imagem} alt={p.nome} />
          </option>
        ))}
      </select>
      {selecionado && (
        <>
          <input value={nome} onChange={(e) => setNome(e.target.value)} required />
          <input type="number" step="0.01" value={valor} onChange={(e) => setValor(e.target.value)} required />
          <input value={imagem} onChange={(e) => setImagem(e.target.value)} required />
          <button type="submit">Atualizar</button>
        </>
      )}
    </form>
  );
}