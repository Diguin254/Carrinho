import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import fundo from "../Login/fundo.png";
import "./login.css";

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const home = useNavigate();

    const handleLogin = () => {
        if (usuario && senha) {
            home("/home");
        } else {
            alert("Usuário e senha inválidos");
        }
    }

    const cadastro = useNavigate();

    const handleCadastro = () => {
        cadastro("/cadastro");
    }
    return (
        <div className="containerLogin">
            <img src={fundo} />
            <div className="telaPrincipalLogin">
                <div className="usuario">
                    <label htmlFor="username">Usuário </label>
                    <input type="text" id="username" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div className="password">
                    <label htmlFor="Senha">Senha </label>
                    <input type="password" id="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div className="logarCadastrar">
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleCadastro}>Cadastre-se</button>
                </div>
            </div>
        </div>
    )
}