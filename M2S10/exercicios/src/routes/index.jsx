import { Route, Routes } from "react-router-dom";
import { CadastroUsuario } from "../pages/Ex1/CadastroUsuario";
import { Login } from "../pages/Login/Login";
import { ValidacaoFormulario } from "../pages/Ex3/ValidacaoFormulario";

export function AppRoutes() {
    return (
        <Routes>
            {/* MINHAS ROTAS PÚBLICAS */}
            <Route path="/exercicio1" element={<CadastroUsuario />} />
            <Route path="/exercicio2" element={<Login />} />
            <Route path="/exercicio3" element={<ValidacaoFormulario />} />
            {/* MINHAS ROTAS PRIVADAS */}
        </Routes>
    )
} 