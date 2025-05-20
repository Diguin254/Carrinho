import { useState } from "react"
import { FaCartShopping } from "react-icons/fa6";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { AuthProvider, useAuth } from "./Privado.jsx"

import Login from "../Pages/Login/login.jsx";
import Cadastro from "../Pages/CriarLogin/cadastro.jsx"
import TelaPrincipal from "../Pages/Produtos/telaPrincipal.jsx";
import Carrinho from "../Pages/Produtos/Carrinho.jsx";

import "./App.css";

export default function App() {
  const [itemCarrinho, setItemCarrinho] = useState([]);
  const [mostraCarrinho, setMostraCarrinho] = useState(false);

  function abreCarrinho() {
    setMostraCarrinho(!mostraCarrinho);
  };

  function adicionarAoCarrinho(item) {
    setItemCarrinho((index) => [...index, item]);
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>

          <Route path="/home" element={
            <>
              <RequireAuth>
                <TelaPrincipal adicionarAoCarrinho={adicionarAoCarrinho} />
                <div className="card-carrinho">
                  {!mostraCarrinho && (
                    <button onClick={abreCarrinho}>
                      <FaCartShopping />
                      <span>{itemCarrinho.length}</span>
                    </button>
                  )}
                  <Carrinho visivel={mostraCarrinho} itens={itemCarrinho} fecharCarrinho={abreCarrinho} />
                </div>
              </RequireAuth>
            </>}
          ></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

function RequireAuth({ children }) {
  const { autenticado } = useAuth()
  return autenticado ? (
    children
  ) : (
    <Navigate to="/" replace />
  )
}