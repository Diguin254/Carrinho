import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./AuthProvider";
import RequireAuth from "./RequireAuth";
import { DataProvider } from "../Componentes/DataContext";

import DashBoard from "../Pages/TelaPrincipalDashBoard/dashBoard";
import Login from "../Pages/Login/login";
import Cadastro from "../Pages/Cadastro/cadastro";
import LerProdutos from "../Pages/LerProdutos/telaPrincipalProduto";
import ProdutosView from "../Pages/TelaPrincipalDashBoard/produtosView";
import AtualizarProdutos from "../Pages/AtualizarProdutos/atualizarProdutos";
import RemoverProdutos from "../Pages/RemoverProdutos/removerProdutos";
import CriarProdutos from "../Pages/CriarProdutos/criarProdutos";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/produtosView" replace />} />
            <Route path="/dashboard" element={<DashBoard />}>
              <Route path="produtosView" element={<ProdutosView />} />

              <Route path="produtos" element={<RequireAuth><LerProdutos /></RequireAuth>} />

              <Route path="criarProdutos" element={<RequireAuth><CriarProdutos /></RequireAuth>} />
              
              <Route path="atualizarProdutos" element={<RequireAuth><AtualizarProdutos /></RequireAuth>} />

              <Route path="deletarProdutos" element={<RequireAuth><RemoverProdutos /></RequireAuth>} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
