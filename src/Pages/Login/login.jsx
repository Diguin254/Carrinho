import { useState } from "react";
import { useAuth } from "../../Componentes/Privado"
import { useNavigate } from "react-router"
import fundo from "../Login/black2.jpg";
import "./login.css";

import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const { login } = useAuth();

    const navigate = useNavigate();

    const handleLogin = () => {
        if (usuario && senha) {
            login()
        } else {
            alert("Usuário e senha inválidos");
        }
    }

    const handleCadastro = () => navigate("/cadastro")

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
                <p>or</p>
                <div className="iconsLogin">
                    <button ><FaFacebookF/></button>
                    <button ><FaGoogle/></button>
                    <button ><FaDiscord/></button>
                </div>
            </div>
        </div>
    )
}