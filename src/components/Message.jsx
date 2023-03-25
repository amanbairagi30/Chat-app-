import React from 'react';
import auth from '../firebase';

const style ={
  mainClass : `container p-2 border border-red-800 rounded-lg shadow-xl`
}

const Message = ({message}) => {
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  return (
    <>
     <div className={`${style.mainClass} ${messageClass}`}>
        <div className="name">
            <p>{message.name}</p>
        </div>
        <div className="msg">
            {message.text}
        </div>
     </div>
    </>
  )
}

export default Message
