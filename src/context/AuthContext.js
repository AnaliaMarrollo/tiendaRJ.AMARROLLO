import React, {useState, createContext} from 'react';
import { auth } from '../firebase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({})

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => auth.logout();

    return (
        <AuthContext.Provider value
        = {}>
           
            { children }
    
        </AuthContext.Provider>
    )
}
