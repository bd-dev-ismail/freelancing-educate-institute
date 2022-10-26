import React from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { createContext } from 'react';
const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({children}) => {
    const user = {displayName: 'hello'}
    //create user
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo = { user, register };
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default UserContext;