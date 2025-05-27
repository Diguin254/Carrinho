import { useState } from "react"
import { useAuth } from "../../Componentes/AuthProvider"

import fundo from "../Login/black2.jpg"
import "./cadastro.css";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [nomeUser, setNomeUser] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [sexo, setSexo] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [termo, setTermo] = useState(false);
    const [manter, setManter] = useState(false);

    const { register } = useAuth();

    const cadastro = () => {
        if (nome && nomeUser && cpf && email && senha && sexo && termo && dataNasc) {
            register(nomeUser, senha)
        } else {
            alert("Preencha todos os campos obrigatórios");
        }
    }

    const redireciona = () => {
        window.location.href = '/login';
    }

    return (
        <div className="containerCadastro">
            <img src={fundo} alt="" />
            <div className="telaCadastro">
                <div className="telaUsuario">
                    <label htmlFor="Nome">Nome Completo* </label>
                    <input type="text" id="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    
                    <label htmlFor="NomeDeUsuario">Nome de usuário*</label>
                    <input type="text" id="NomeDeUsuario" value={nomeUser} onChange={(e) => setNomeUser(e.target.value)} />
                    
                    <label htmlFor="Cpf">CPF*</label>
                    <input type="text" id="Cpf" placeholder="XXX.XXX.XXX-XX" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    
                    <label htmlFor="Nasc">Data de Nascimento*</label>
                    <input type="date" id="Nasc" placeholder="XX/XX/XXXX" value={dataNasc} onChange={(e) => setDataNasc(e.target.value)} />
                    
                    <label htmlFor="Email">Email*</label>
                    <input type="email" id="Email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                    <label htmlFor="Senha">Senha* </label>
                    <input type="password" id="Senha" placeholder="********" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    
                    <label htmlFor="" className="lbSexo">Sexo*</label>
                    <div className="sexo">
                        <div className="masc"><label htmlFor="sexoMasculino"><input type="radio" name="sexo" id="masculino" value="masculino" checked={sexo == "masculino"} onChange={(e) => setSexo(e.target.value)} />Masculino</label></div>
                        <div className="fem"><label htmlFor="sexoFeminino"><input type="radio" name="sexo" id="feminino" value="feminino" checked={sexo == "feminino"} onChange={(e) => setSexo(e.target.value)} />Feminino</label></div>
                        <div className="outro"><label htmlFor="sexoOutro"><input type="radio" name="sexo" id="outro" value="outro" checked={sexo == "outro"} onChange={(e) => setSexo(e.target.value)} />Outro</label></div>
                    </div>
                    <div className="termos">
                        <input type="checkbox" id="Termos" checked={termo} onChange={e => setTermo(e.target.checked)} />
                        <label htmlFor="Termos">Aceitar os Termos</label>
                    </div>
                    <div className="manter">
                        <input type="checkbox" id="Manter" checked={manter} onChange={(e) => setManter(e.target.value)} />
                        <label htmlFor="Manter">Manter-me conectado</label>
                    </div>
                </div>
                <div className="botaoCadastro">
                    <button onClick={cadastro}>Cadastrar</button>
                    <button onClick={redireciona}>Login</button>
                </div>
            </div>
        </div>
    )
}