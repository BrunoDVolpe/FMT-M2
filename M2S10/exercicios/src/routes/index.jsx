import { Route, Routes } from "react-router-dom";
import { CadastroUsuario } from "../pages/Ex1/CadastroUsuario";
import { Login } from "../pages/Login/Login";
import { ValidacaoFormulario } from "../pages/Ex3/ValidacaoFormulario";
import { TemplatePrivateRoute } from "../templates/private-route";
import { HomePage } from "../pages/HomePage/HomePage";
import { NotFound } from "../pages/NotFound/NotFound";

export function AppRoutes() {
    return (
        <Routes>
            {/* MINHAS ROTAS PÚBLICAS */}
            <Route path="/exercicio1" element={<CadastroUsuario />} />
            <Route path="/exercicio2" element={<Login />} />
            <Route path="/exercicio3" element={<ValidacaoFormulario />} />
            <Route path="/login" element={<Login />} />
            {/* MINHAS ROTAS PRIVADAS */}
            <Route path="/" element={<TemplatePrivateRoute />}> {/* Aqui é a chamada do template */}
                <Route index path="/" element={<HomePage />}/>  {/* Aqui é o que será inserido no Outlet */}
            </Route>
            {/* Se uma rota não encontrada */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
} 