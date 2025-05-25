import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./AuthProvider";
import RequireAuth from "./RequireAuth";

import DashBoard from "../Pages/TelaPrincipalDashBoard/dashBoard";
import Login from "../Pages/Login/login";
import Cadastro from "../Pages/CriarLogin/cadastro";
import TelaPrincipalProduto from "../Pages/LerProdutos/telaPrincipalProduto";
import ProdutosView from "../Pages/TelaPrincipalDashBoard/produtosView";
import AtualizarProdutos from "../Pages/AtualizarProdutos/atualizarProdutos";
import RemoverProdutos from "../Pages/RemoverProdutos/removerProdutos";
import CriarProdutos from "../Pages/CriarProdutos/criarProdutos";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />}/>
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="produtosView" element={<ProdutosView />} />

            <Route
              path="produtos"
              element={
                <RequireAuth>
                  <TelaPrincipalProduto />
                </RequireAuth>
              } />

            <Route
              path="atualizarProdutos"
              element={
                <RequireAuth>
                  <AtualizarProdutos />
                </RequireAuth>
              } />

            <Route
              path="deletarProdutos"
              element={
                <RequireAuth>
                  <RemoverProdutos />
                </RequireAuth>
              } />

            <Route
              path="criarProdutos"
              element={
                <RequireAuth>
                  <CriarProdutos />
                </RequireAuth>
              } />

          </Route>


          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
