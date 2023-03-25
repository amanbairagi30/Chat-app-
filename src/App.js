// import './App.css';
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import auth from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import Chat from "./components/Chat";
import SendMessage from "./components/SendMessage";

function App() {
  const[user] = useAuthState(auth);
  const scroll = useRef();

  console.log(user);
  return (
    <>
    <div className="main-container h-[100vh] border border-green-500 mx-auto my-auto flex justify-center" >
      <section className="content-container my-4 mx-4 flex flex-col w-[80vw]  border border-red-800">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="chat flex flex-col items-center p-4 h-[100%]">
          {user ? <Chat /> : null}
        </div>
        <SendMessage scroll={scroll} />
      </section>
    </div>
    </>
  );
}

export default App;
