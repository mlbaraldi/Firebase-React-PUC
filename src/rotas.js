import { Route, Routes } from "react-router-dom"

import Cadastro from "./Paginas/Cadastro"
import Login from "./Paginas/Login"
import NotFound from "./Paginas/NotFound"
import Principal from "./Paginas/Principal"

const Rotas = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Cadastro" element={<Cadastro />} />
        <Route exact path="/Principal" element={<Principal />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      </div>
  );
};

export default Rotas;
