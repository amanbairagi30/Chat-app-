import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../firebase';


const Logout = () => {
    const signOut = ()=>{
        signOut(auth);
    }
  return (
    <div className="button bg-white w-[7rem] flex items-center justify-center h-[3rem]">
        <button onClick={()=> auth.signOut()}>Log Out</button>
    </div>
  )
}

export default Logout
