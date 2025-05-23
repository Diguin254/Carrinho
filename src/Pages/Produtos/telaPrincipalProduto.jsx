import { useState } from "react";
import { useNavigate } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import Carrinho from "./Carrinho";
import { produtos } from "./produtos";

import "./telaPrincipalProduto.css";
import "./Carrinho.css"

export default function TelaPrincipalProduto() {
  const sair = useNavigate();
  const handleSair = () => sair("/");

  const [itemCarrinho, setItemCarrinho] = useState([]);
  const [mostraCarrinho, setMostraCarrinho] = useState(false);

  const abreCarrinho = () => setMostraCarrinho(!mostraCarrinho);

  const adicionarAoCarrinho = (produto) => {
    setItemCarrinho((index) => {
      const existe = index.find((item) => item.id === produto.id);
      if (existe) {
        return index.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item );
      } else {
        return [...index, { ...produto, quantidade: 1 }];
      }
    });
  };

  const incrementarItem = (produtoId) => {
    setItemCarrinho((index) => index.map((item) => item.id === produtoId ? { ...item, quantidade: item.quantidade + 1 } : item )
    );
  };

  const decrementarItem = (produtoId) => {
    setItemCarrinho((index) =>
      index.map((item) =>
          item.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item ).filter((item) => item.quantidade > 0));
  };

  return (
    <div className="container">
      {produtos?.map((item, index) => (
        <div key={index} className="produto">
          <img src={item.imagem} alt={item.nome} />
          <h3>{item.nome}</h3>
          <p>R$ {item.valor.toFixed(2)}</p>
          <button onClick={() => adicionarAoCarrinho(item)}>Comprar</button>
        </div>
      ))}

      <div className="sair">
        <button onClick={handleSair}>Sair</button>
      </div>

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
