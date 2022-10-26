import React from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    //create user
    const register = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //signin user
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    //login with google
    const loginGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //login with github
    const loginGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    //update profile
    const updateUserProfile  =(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
    //logout
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    //observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            if(currentUser == null || currentUser.email){
                setUser(currentUser);
            }
              setLoading(false);   
       })
        return () => unsubscribe();
    },[])
    const authInfo = {
      user,
      loading,
      name, 
      setName,
      photoURL,
      setPhotoURL,
      register,
      login,
      logout,
      loginGoogle,
      loginGithub,
      updateUserProfile,
    };
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default UserContext;