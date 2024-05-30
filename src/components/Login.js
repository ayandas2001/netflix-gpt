import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidation} from "../utils/loginFormValidation";
import {auth} from "../utils/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE,USER_LOGO } from '../utils/constant';
const Login = () => {

const [isSignInForm ,setIsSignInForm] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);
const navigate = useNavigate();
const email = useRef(null);
const password = useRef(null);
const name = useRef(null);
const dispatch = useDispatch();


const handleValidation = ()=>{
    const message = checkValidation(email.current.value,password.current.value);
    setErrorMessage(message);
    
    if(message) return;

if(!isSignInForm){
        // Sign Up Form
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_LOGO
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    }).catch((error) => {
      setErrorMessage(error.message);
    });

    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    setErrorMessage(errorCode+"-"+errorMessage);
  });

}else{
        // Sign in Form

 signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMessage(errorCode+"-"+errorMessage);

  });

    }
}


const toggleSignIn = ()=>{
    setIsSignInForm(!isSignInForm);
}


  return (
    <div>
        <Header />
    <div className='absolute w-full'>
      <img className="w-full" src={BACKGROUND_IMAGE}
       alt="bgLogo" />
       </div>
       <form onSubmit={(e)=>e.preventDefault()}className=' bg-black absolute p-12 w-[20%] my-96 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" ref={name} placeholder="Full Name" className=' p-4 my-4 w-full bg-gray-700'/>}
        <input type="text" ref={email} placeholder="Email Address" className=' p-4 my-4 w-full bg-gray-700'/>
        <input type="password" ref={password} placeholder="Password" className=' p-4 my-4 w-full bg-gray-700' />
        <p className=' font-bold text-red-600 text-lg'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-500 w-full font-bold' onClick={handleValidation}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className=' cursor-pointer text-lg' onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In Now.."}</p>
       </form>
    </div>
  )
}

export default Login
