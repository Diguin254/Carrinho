import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider }   from "./AuthProvider";
import RequireAuth        from "./RequireAuth";
import { DataProvider }   from "../Componentes/DataContext";

import DashBoard          from "../Pages/TelaPrincipalDashBoard/dashBoard";
import ProdutosView       from "../Pages/TelaPrincipalDashBoard/produtosView";
import LerProdutos        from "../Pages/LerProdutos/telaPrincipalProduto";
import CriarProdutos      from "../Pages/CriarProdutos/criarProdutos";
import AtualizarProdutos  from "../Pages/AtualizarProdutos/atualizarProdutos";
import RemoverProdutos    from "../Pages/RemoverProdutos/removerProdutos";

import Login   from "../Pages/Login/login";
import Cadastro from "../Pages/Cadastro/cadastro";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <Routes>

            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="/dashboard" element={<DashBoard />}>
              
              <Route index element={<ProdutosView />} />

              <Route path="produtos" element={
                  <RequireAuth>
                    <LerProdutos />
                  </RequireAuth>
                } 
              />
              <Route 
                path="criarProdutos" element={
                  <RequireAuth>
                    <CriarProdutos />
                  </RequireAuth>
                } 
              />
              <Route 
                path="atualizarProdutos" element={
                  <RequireAuth>
                    <AtualizarProdutos />
                  </RequireAuth>
                } 
              />
              <Route 
                path="deletarProdutos" element={
                  <RequireAuth>
                    <RemoverProdutos />
                  </RequireAuth>
                } 
              />
            </Route>

            <Route path="/login"    element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route path="*" element={<Navigate to="/dashboard" replace />} />

          </Routes>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
