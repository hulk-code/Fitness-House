import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


import app from "../../../Component/Firebase/firebase.config";


 export const AuthContext=createContext('')
  const auth=getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState('')
    
    const googleProvider = new GoogleAuthProvider();
    const [loading ,setloading]=useState(true)
    const createUser=(email ,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email ,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth ,email,password)
    }
    const LogOut=()=>{
        setloading(true)
        return signOut(auth)
    }
    const googleSignIn = () => {
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };

    
  useEffect(() =>{
     const unSubscribe=onAuthStateChanged(auth , currentUser =>{
    //   const userEmail = currentUser?.email || user.email;
    //   const loggedUser = {email: userEmail}
        setUser(currentUser)
        setloading(false)
        // if(currentUser){
        //   axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials: true})
        //   .then(res =>{
        //     console.log("Token response",res.data);
        //   })
        // }
        // else{
        //   axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
        //   .then(res =>{
        //     console.log(res.data);
        //   })
        // }
     })
     return()=>{
        unSubscribe();
     }
  },[])
    const authInfo={
        user,
        auth,
        createUser,
        LogOut,
        logIn,
        loading,
        updateUserProfile,
        googleSignIn
    }
    return (
      <AuthContext.Provider value={authInfo}>
       {children}
      </AuthContext.Provider>  
    );
};

export default AuthProvider;