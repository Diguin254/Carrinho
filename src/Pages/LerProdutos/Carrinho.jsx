import React from "react"

export default function Carrinho({ visivel, itens, incrementarItem, decrementarItem, fecharCarrinho }) {

    if (!visivel) return null;

    const total = itens.reduce((acc, item) => acc + item.valor * item.quantidade, 0);

    return (
        <div className="carrinhoAberto">
            <div className="topoCarrinho">Seu carrinho tem {itens.reduce((acc, item) => acc + item.quantidade, 0)} itens
                <button className="fechar" onClick={fecharCarrinho}>X</button>
            </div>
            {itens?.map(item => (
                <div key={item.id} className="item">
                    <img src={item.imagem} alt={item.nome} />
                    <h3>{item.nome}</h3>
                    <div className="botaoAdcRemov">
                        <p>R$ {(item.valor * item.quantidade).toFixed(2)}</p>
                        <button onClick={() => incrementarItem(item.id)}>+</button>
                        <p>{item.quantidade}</p>
                        <button onClick={() => decrementarItem(item.id)}>-</button>
                    </div>
                </div>
            ))}
            <div className="valorTotal">
                <h4>Valor total:<p>R$ {total.toFixed(2)}</p></h4>
            </div>

        </div>
    )
}