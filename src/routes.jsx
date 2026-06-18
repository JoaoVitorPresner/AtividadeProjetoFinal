import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Treinos from "./pages/Treinos";
import Exercicios from "./pages/Exercicios";
import Favoritos from "./pages/Favoritos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

        <Route
          path="/treinos"
          element={<Treinos />}
        />

        <Route
          path="/exercicios"
          element={<Exercicios />}
        />

        <Route
          path="/favoritos"
          element={<Favoritos />}
        />

      </Routes>
    </BrowserRouter>
  );
}