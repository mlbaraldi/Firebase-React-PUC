import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase'

import "./../css/style.css"


function NotFound() {
  const [user, setUser] = useState([])

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return(
    <div>
    <p>Página não encontrada</p>
    <p>Usuario Logado: {user?.email}</p>
    </div>
  )
}

export default NotFound