import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Dashboard/home"
import LoginPage from "../pages/LoginPage/LoginPage";
import CadastroPage from "../pages/CadastroPage/index";
import { TemplatePrivateRoute } from "../templates/private-route"

export function AppRoutes() {
    return (
        <>
            <Routes>
            {/* MINHAS ROTAS PUBLICAS */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />

            {/* MINHAS ROTAS PRIVADAS */}
            <Route path="/dashboard" element={<TemplatePrivateRoute />}>
                <Route path="/dashboard" element={<HomePage />}/>
            </Route>
        </Routes>
        </>
    )
}