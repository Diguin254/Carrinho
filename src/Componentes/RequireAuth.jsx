import { useAuth } from "./Privado";
import { Navigate, useLocation } from "react-router";

export default function RequireAuth({ children }) {
  const { autenticado } = useAuth();
  const location = useLocation();

  if (!autenticado) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
