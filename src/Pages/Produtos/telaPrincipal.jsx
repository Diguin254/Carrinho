import { produtos } from "./produtos.js"
import { useNavigate } from "react-router";

import "./telaPrincipal.css"

export default function Produtos({ adicionarAoCarrinho }) {

    const sair = useNavigate();

    const handleSair = () => {
        sair("/");
    }

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
        </div>
    )
}