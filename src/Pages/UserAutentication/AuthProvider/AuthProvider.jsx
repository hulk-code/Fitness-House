import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


import app from "../../../Component/Firebase/firebase.config";
import useAxiosPublic from "../../../Hook/UseAxiousPublic/UseAxiousPublic";


 export const AuthContext=createContext('')
  const auth=getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState('')
    
    const googleProvider = new GoogleAuthProvider();
    const [loading ,setloading]=useState(true)
    const axiosPublic=useAxiosPublic()
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

    
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          if (currentUser) {
            const userInfo = { email: currentUser.email }
            axiosPublic.post('/jwt', userInfo)
              .then(res => {
                if (res.data.token) {
                  localStorage.setItem('access-token', res.data.token)
                 setloading(false)
                }
    
              })
          }
          else {
            localStorage.removeItem('access-token')
             setloading(false)
          }
          // console.log('current user' ,currentUser);
          
    
        });
        return () => {
          return unsubscribe()
        }
      }, [])
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