import React, { useContext } from "react";
import { DataContext } from "../../Componentes/DataContext";

import "../Produtos/Carrinho.css";

export default function Carrinho({ visivel, fecharCarrinho }) {

    const { carrinho: itens, incrementarItem, decrementarItem } = useContext(DataContext);

    if (!visivel) return null;

    const total = itens.reduce((acc, item) => acc + item.valor * item.quantidade, 0);

    return (
        <div className="carrinhoAberto">
            <div className="topoCarrinho">
                Seu carrinho tem {itens.reduce((acc, item) => acc + item.quantidade, 0)} itens
                <button className="fechar" onClick={fecharCarrinho}>X</button>
            </div>

            <div className="lista-itens">
                {itens?.map(produto => (
                    <div key={produto.id} className="item">
                        <img src={produto.imagem} alt={produto.nome} />
                        <h3>{produto.nome}</h3>
                        <div className="botaoAdcRemov">
                            <p>R$ {(produto.valor * produto.quantidade).toFixed(2)}</p>
                            <button onClick={() => incrementarItem(produto.id)}>+</button>
                            <p>{produto.quantidade}</p>
                            <button onClick={() => decrementarItem(produto.id)}>-</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="valorTotal">
                <h4>Valor total: R$ {total.toFixed(2)}</h4>
            </div>
        </div>

    )
}