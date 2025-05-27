import {useContext, useState, useEffect } from "react";
import { DataContext } from "../../Componentes/DataContext"
import api from "../../Componentes/API/api";
import { FaCartShopping } from "react-icons/fa6";
import Carrinho from "../Produtos/Carrinho";

import "./telaPrincipalProduto.css";
import "../Produtos/Carrinho.css"

export default function TelaPrincipalProduto() {
  const [produtos, setProdutos] = useState([]);
  const { carrinho: itemCarrinho, adicionarAoCarrinho, incrementarItem, decrementarItem } = useContext(DataContext);
  const [mostraCarrinho, setMostraCarrinho] = useState(false);

  useEffect(() => {
    api.get('/produtos/ler').then(({ data }) => setProdutos(data)).catch(err => console.error(err));
  });

  const abreCarrinho = () => setMostraCarrinho(!mostraCarrinho);
  
  return (
    <div className="container">
      {produtos?.map((produto) => (
        <div key={produto.id} className="produto">
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>R$ {produto.valor.toFixed(2)}</p>
          <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao carrinho</button>
        </div>
      ))}

      <div className="card-carrinho">
        {!mostraCarrinho && (
          <button onClick={abreCarrinho}>
            <FaCartShopping />
            <span>
              {itemCarrinho.reduce((acc, i) => acc + i.quantidade, 0)}
            </span>
          </button>
        )}
        <Carrinho
          visivel={mostraCarrinho}
          itens={itemCarrinho}
          incrementarItem={incrementarItem}
          decrementarItem={decrementarItem}
          fecharCarrinho={abreCarrinho}
        />
      </div>
    </div>
  );
}
