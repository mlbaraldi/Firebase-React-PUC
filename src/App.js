import { Link } from "react-router-dom";
import "./css/style.css"
import Rotas from "./rotas";
import React from 'react'

function App() {
  return (
    <div>
      <h2>PUC React - Firebase App</h2>
      <nav>
        <Link to="/Login">Login</Link>
        <br/>
        <Link to="/Cadastro">Cadastro</Link>
        <br/>
        <Link to="/Principal">Principal</Link>
      </nav>
      <Rotas />
      <footer>
        Marcelo Luiz Baraldi - Puc 2022
      </footer>
    </div>
  );
}
export default App;