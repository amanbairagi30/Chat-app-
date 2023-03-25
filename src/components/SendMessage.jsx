import React, { useState } from 'react';
import {db} from "../firebase"
import auth from '../firebase';
import { addDoc , collection ,serverTimestamp } from 'firebase/firestore';


const SendMessage = ({scroll}) => {
  const [input,setInput] = useState("");

  const sendMessages = async(e)=>{
    e.preventDefault();

    if(input == ''){
      alert("Please Enter your message !!");
      return;
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('');
    scroll.current.scrollIntoView({behaviour : scroll});

  }

  return (
    <>
     <div className="container flex items-center mx-auto justify-center">
        <form onSubmit={sendMessages} className='container flex items-center justify-around absolute bottom-5  w-[80%] h-[3rem] border border-green-600'>
            <input type="text" className='bg-purple-800 w-[18rem] p-2 text-white' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit' className='bg-green-700 text-white p-2 px-4'>Send</button>
        </form>
     </div>
    </>
  )
}

export default SendMessage
