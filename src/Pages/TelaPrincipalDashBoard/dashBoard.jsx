import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../Componentes/AuthProvider";
import "./dashBoard.css";

export default function DashBoard() {
  const navigate = useNavigate();
  const { autenticado, logout } = useAuth();

  const handleProdutos = () => {
    if (autenticado) {
      navigate("produtos");
    } else {
      alert("Você precisa estar logado para acessar os produtos.");
      navigate("/login");
    }
  }

  return (
    <div className="container-dashboard">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Painel</h1>
        </div>
        <div className="sidebar-buttons">
          <button onClick={handleProdutos}>Ver Produtos</button>
          <button onClick={() => navigate("atualizarProdutos")}>Atualizar Produtos</button>
          <button onClick={() => navigate("deletarProdutos")}>Deletar Produtos</button>
          <button onClick={() => navigate("criarProdutos")}>Criar Produtos</button>
          <button onClick={() => navigate("produtosView")}>Tela Inicial</button>
          {autenticado ? (<button onClick={logout}>Sair</button>) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
