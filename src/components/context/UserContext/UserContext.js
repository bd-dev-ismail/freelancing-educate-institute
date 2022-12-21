import React from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
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
    const [profile , setProfile] = useState("");
    const [profileName, setProfileName] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
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
    //facebook
    const loginFacebook = ()=>{
        return signInWithPopup(auth, facebookProvider);
    }
    //login with github
    const loginGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    //update profile
    const updateUserProfile  =(profile)=>{
        console.log(profile);
        setLoading(true);
        setProfile(profile.photoURL)
        setProfileName(profile.displayName)
        
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
 
                setUser(currentUser);
           
              setLoading(false);   
       })
        return () => unsubscribe();
    },[])
    const authInfo = {
      user,
      setUser,
      loading,
      profile,
      name,
      profileName,
      setName,
      photoURL,
      setPhotoURL,
      register,
      login,
      logout,
      loginGoogle,
      loginGithub,
      updateUserProfile,
      loginFacebook,
    };
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default UserContext;