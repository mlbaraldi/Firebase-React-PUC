import { signOut } from "firebase/auth";
import { auth } from '../Firebase'


export const logout = async () => {
    console.log("deslogando")
    await signOut(auth);
  };