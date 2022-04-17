import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./../css/style.css"

import { auth } from "../Firebase";

function Login() {

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState("")
  let [mensagem, setMensagem] = useState("")
  let navigate = useNavigate()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/Principal")
    } catch (error) {
      setMensagem("Usuário ou Senha Incorretos")
    }
  };

  return (
    <div className="App">

      <div>
        <h3> Acesso ao Sistema </h3>
        <input
          placeholder="Email"
          type="text"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <br/>
        <input
          placeholder="Senha"
          type="password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
         <br/>

        <button onClick={login}>Login</button>

        <label id="msg">{mensagem}</label>

        <p>Usuario Logado: {user?.email}</p>
        

      </div>

    </div>
  );
}

export default Login;