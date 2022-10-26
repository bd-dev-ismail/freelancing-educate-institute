import React from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { current } from 'daisyui/src/colors';
const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
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
    //update profile
    const updateUserProfile = (profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    //login with google
    const loginGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);
    }
    //login with github
    const loginGithub = ()=>{
        return signInWithPopup(auth, githubProvider);
    }
    //logout
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    //observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            if(currentUser === null || currentUser.uid){
                setUser(currentUser);
            }
            
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
      user,
      loading,
      register,
      login,
      updateUserProfile,
      logout,
      loginGoogle,
      loginGithub,
    };
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default UserContext;