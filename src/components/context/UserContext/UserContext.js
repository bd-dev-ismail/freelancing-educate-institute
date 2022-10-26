import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    //create user
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //signin user
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return () => unsubscribe();
    },[])
    const authInfo = { user, register, login };
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default UserContext;