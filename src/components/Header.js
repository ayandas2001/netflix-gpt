import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constant';
const Header = () => {

const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((store)=>store.user);

const handleSignOut = ()=>{
  signOut(auth).then(() => {
  }).catch((error) => {
    console.log(error.code);
  });
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  return ()=>unSubscribe();
},[])

  return (
    <div className='absolute w-screen px-10 py-4 bg-gradient-to-b from-black z-50 flex justify-between'>
      <div>
       
      <img  className="w-48" src={NETFLIX_LOGO}
      alt="log" />
      </div>
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
