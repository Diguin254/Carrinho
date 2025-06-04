import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Componentes/DataContext";
import api from "../../Componentes/API/api";
import { FaCartShopping } from "react-icons/fa6";
import Carrinho from "../Produtos/Carrinho";

import "../Produtos/Carrinho.css";
import "./telaPrincipalProduto.css";

export default function TelaPrincipalProduto() {
  const [produtos, setProdutos] = useState([]);
  const {
    carrinho: itemCarrinho,
    adicionarAoCarrinho,
    incrementarItem,
    decrementarItem,
  } = useContext(DataContext);
  const [mostraCarrinho, setMostraCarrinho] = useState(false);

  useEffect(() => {
    api
      .get("/produtos/ler")
      .then(({ data }) => setProdutos(data))
      .catch((err) => console.error(err));
  }, []);

  const abreCarrinho = () => setMostraCarrinho((v) => !v);

  return (
    <div className="produtos-wrapper">
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="card-produto">
            <div className="card-img">
              <img src={produto.imagem} alt={produto.nome} />
            </div>

            <div className="card-body">
              <h3 className="card-title">{produto.nome}</h3>
            </div>

            <div className="card-footer">
              <p className="card-preco">
                R$ {produto.valor.toFixed(2)}
              </p>
              <button
                className="card-btn"
                onClick={() => adicionarAoCarrinho(produto)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card-carrinho">
        {!mostraCarrinho && (
          <button className="toggle-carrinho" onClick={abreCarrinho}>
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
