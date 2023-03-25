import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase';
import Logout from './Logout';
import SignIn from './SignIn';

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
   <>
    <div className="container mx-auto">
        <div className="bg-red-500 px-2 flex  justify-between items-center h-[5rem]">
            <div className="heading">
              My Chat App
            </div>

            {user ? <Logout /> : <SignIn />}
            {/* <div className="signin">
              <SignIn/>
            </div>
            <div className="button bg-white w-[7rem] flex items-center justify-center h-[3rem]">
              <Logout />
            </div> */}
        </div>
    </div>
   </>
  )
}

export default Navbar
