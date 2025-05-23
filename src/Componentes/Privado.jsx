import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router'

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);
    const navigate = useNavigate();

    function register(username, password) {
        localStorage.setItem('user_' + username, password)
        navigate('/login')
    }

    function login(username, password) {
        const stored = localStorage.getItem('user_' + username)

        if (stored && stored === password) {
            setAutenticado(true);
            return true;
        } else {
            alert('Usuário ou senha incorretos')
            return false;
        }
    }

    const logout = () => {
        setAutenticado(false)
        navigate('/login', { replace: true })
    }

    return (
        <AuthContext.Provider value={{ autenticado, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)