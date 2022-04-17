import { useState, useEffect } from "react"
import "./../css/style.css"
import { doc, getDoc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from '../Firebase'
import { logout } from "./logout"


//(Principal): Deverá trazer os dados do usuário como: nome, sobrenome e data de nascimento e informá-las na tela.  

function Principal() {
  const [user, setUser] = useState([])
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [nascimento, setNascimento] = useState("")


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
 
  const showDados = async () => {
    try {
      const docRef = doc(db, "usuarios", user.uid)
      const docSnap = await getDoc(docRef)
      setNome("Nome: " + docSnap.data().nome)
      setSobrenome("Sobrenome:" + docSnap.data().sobrenome)
      setNascimento("Data de Nascimento:" + docSnap.data().nascimento)
    } catch (e) {
      setNome("")
      setSobrenome("")
      setNascimento("")
    }

  }

  useEffect(() => {
    showDados()
  }, [user])
  

  return <div className="Principal">
    <label> Informações do usuário</label>
    <label>{nome}</label>
    <label>{sobrenome}</label>
    <label>{nascimento}</label>
    <br/>

    <p>Usuario Logado: {user?.email}</p>
    
    <button onClick={logout}>Logout</button>

  </div>
}

export default Principal;