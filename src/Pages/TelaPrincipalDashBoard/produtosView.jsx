import { useState, useEffect } from "react";
import api from "../../Componentes/API/api";
import { FaCartPlus } from "react-icons/fa";
import "./produtosView.css";

export default function ProdutosView() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get("/produtos/ler").then(({ data }) => setProdutos(data)).catch(console.error);
  }, []);

  const preview = produtos.slice(0, 6);

  return (
    <div className="container-produtos-view">
      <h1>Pré-via de Produtos</h1>
      <div className="preview-grid">
        {preview.map((p) => (
          <div key={p.id} className="card-preview">
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p>R$ {p.valor.toFixed(2)}</p>
            <button onClick={() => window.location.href = "/dashboard/produtos"}>
              <FaCartPlus /> Ver todos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
