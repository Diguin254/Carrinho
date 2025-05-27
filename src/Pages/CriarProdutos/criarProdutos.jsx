import { useState } from 'react';
import api from "../../Componentes/API/api";
import { useNavigate } from 'react-router';

import "./criarProdutos.css";

export default function CriarProdutos() {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');
    const navigate = useNavigate();

    const criar = async (e) => {
        e.preventDefault();
        try {
            await api.post('/produtos/criar', { nome, valor: Number(valor), imagem });
            alert('Produto criado com sucesso!');
            navigate('/produtos/criar');
        } catch (erro) {
            console.error(erro);
            alert('Erro ao criar produto');
        }
    };

    return (
        <form onSubmit={criar} className='form-criarproduto' >
            <div className='title'>
                <h2>Criar Produto</h2>
            </div>
            <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input placeholder="Valor" type='number' step="0.01" value={valor} onChange={(e) => setValor(e.target.value)} required />
            <input placeholder="URL da Imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} required />
            <button type="submit">Criar Produto</button>
        </form>
    );
}