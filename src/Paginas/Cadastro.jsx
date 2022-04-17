import React, { useState } from 'react'
import { addDoc, doc, setDoc } from 'firebase/firestore'
import "./../css/style.css"
import { collectionRef, auth, db } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";




function Cadastro() {
  const [newEmail, setEmail] = useState("")
  const [newSenha, setSenha] = useState("")
  const [newNome, setNome] = useState("")
  const [newSobrenome, setSobrenome] = useState("")
  const [newNascimento, setNascimento] = useState("")
  const [user, setUser] = useState({})

  let navigate = useNavigate()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const registerAuth = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        newEmail,
        newSenha
      )

      const newUID = auth.currentUser.uid

      const note = {
        uid: newUID,
        nome: newNome, 
        sobrenome: newSobrenome, 
        nascimento: newNascimento
      }

      await setDoc(doc(db, 'usuarios', note.uid), note)
      

        window.alert("Usuário Criado!")
        navigate("/Principal")

    } catch (error) {
      console.log(error.message)
    }
  }


  return(
    <div className="Cadastro">
    <h3>Cadastro</h3>
    <input placeholder='email' type="text" onChange={(e) => setEmail(e.target.value)}/><br/>
    <input placeholder='senha' type="password" onChange={(e) => setSenha(e.target.value)}/><br/>
    <input placeholder='nome' type="text" onChange={(e) => setNome(e.target.value)}/><br/>
    <input placeholder='sobrenome' type="text" onChange={(e) => setSobrenome(e.target.value)}/><br/>
    <input placeholder='data de nascimento' type="date" onChange={(e) => setNascimento(e.target.value)}/><br/>
    <button onClick={registerAuth}>Cadastrar Usuário</button>
    
    </div>
  )
}

export default Cadastro;