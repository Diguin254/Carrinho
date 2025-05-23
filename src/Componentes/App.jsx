import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./Privado";
import RequireAuth from "./RequireAuth";

import DashBoard from "../Pages/TelaPrincipal/dashBoard";
import Login from "../Pages/Login/login";
import Cadastro from "../Pages/CriarLogin/cadastro";
import TelaPrincipalProduto from "../Pages/Produtos/telaPrincipalProduto";

export default function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<DashBoard />}>
              <Route index element={<div>Bem-vindo! Escolha uma opção.</div>} />

              <Route
                path="produtos"
                element={
                  <RequireAuth>
                    <TelaPrincipalProduto />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
}
