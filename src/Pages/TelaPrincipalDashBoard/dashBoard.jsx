// DashBoard.jsx
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Componentes/AuthProvider";
import "./dashBoard.css";

export default function DashBoard() {
  const navigate = useNavigate();
  const { autenticado, logout } = useAuth();

  const produtos = () => {
    if (autenticado) {
      navigate("produtos");
    } else {
      alert("Você precisa estar logado para acessar os produtos.");
      navigate("/login");
    }
  }

  return (
    <div className="container-dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Painel</h1>
        </div>
        <nav className="sidebar-buttons">
          <button onClick={produtos}>Ver Produtos</button>
          <button onClick={() => navigate("atualizarProdutos")}>Atualizar Produtos</button>
          <button onClick={() => navigate("deletarProdutos")}>Deletar Produtos</button>
          <button onClick={() => navigate("criarProdutos")}>Criar Produtos</button>
          <button onClick={() => navigate("produtosView")}>Tela Inicial</button>
          {autenticado
            ? <button onClick={logout}>Sair</button>
            : <button onClick={() => navigate("/login")}>Login</button>
          }
        </nav>
      </aside>

      <main className="main-content-dashboard">
        <Outlet />
      </main>
    </div>
  );
}
