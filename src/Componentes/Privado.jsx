import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router'

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);
    const navigate = useNavigate();

    const login = () => {
        setAutenticado(true)
        navigate('/home')
    }

    const logout = () => {
        setAutenticado(false)
        navigate('/', { replace: true })
    }

    return (
        <AuthContext.Provider value={{ autenticado, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)