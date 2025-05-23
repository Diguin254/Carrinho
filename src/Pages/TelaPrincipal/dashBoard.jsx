import { Outlet, useNavigate } from "react-router";

export default function DashBoard() {
  const navigate = useNavigate();
  return (
    <div className="container-dashboard">
      <h1>Dashboard</h1>
      <button onClick={() => navigate("produtos")}>
        Visualizar Produtos
      </button>
      <Outlet />
    </div>
  );
}
