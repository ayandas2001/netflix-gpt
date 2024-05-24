import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
const navigate = useNavigate();
const user = useSelector((store)=>store.user);

const handleSignOut = ()=>{
  signOut(auth).then(() => {
    navigate("/")
  }).catch((error) => {
    console.log(error.code);
  });
}

  return (
    <div className='absolute w-screen px-10 py-4 bg-gradient-to-b from-black z-50 flex justify-between'>
      <img  className="w-48" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt="log" />
      { user &&
      <div className=' flex'>
        <img src= {user?.photoURL} alt="login-logo" className='p-6 w-28 h-28' />
        <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
      </div>
      }
    </div>
  )
}

export default Header;
