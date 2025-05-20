import React from "react"

export default function Carrinho({ visivel, itens, fecharCarrinho }) {

    if (!visivel) return null;

    let total = 0;

    for (let i = 0; i < itens.length; i++) {
        total += itens[i].valor;
    }

    return (
        <div className="carrinhoAberto">
            <div className="topoCarrinho">Seu carrinho tem {itens.length} itens
                <button className="fechar" onClick={fecharCarrinho}>X</button>
            </div>
            {itens?.map((item, index) => (
                <div key={index} className="item">
                    <img src={item.imagem} alt={item.nome} />
                    <h3>{item.nome}</h3>
                    <div className="botaoAdcRemov">
                        <p>R$ {item.valor.toFixed(2)}</p>
                        <button>+</button>
                        <p>0</p>
                        <button>-</button>
                    </div>
                </div>
            ))}
            <div className="valorTotal">
                <h4>Valor total:<p>R$ {total.toFixed(2)}</p></h4>
            </div>

        </div>
    )
}