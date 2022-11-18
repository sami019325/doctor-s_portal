import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/FIrebase.config';


export const ContextData = createContext()
const SharedRoute = ({ children }) => {


    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)

    // get user current location 
    /*  */

    // sign in
    const GoogleSignInCall = () => {
        setLoading(true)
        signInWithPopup(auth, provider)

    }
    // sign out 
    const SignOutUser = () => {
        setLoading(true)
        signOut(auth)
            .then(() => console.log('sign out successfully'))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, logedUser => {
            logedUser && setUser(logedUser);
            console.log('auth state changed and current user is', logedUser)
            setLoading(false)

        })
        return (() => unsubscribe())

    }, [auth])

    const data = { user, GoogleSignInCall, SignOutUser, setUser, loading, setLoading }
    return (
        <ContextData.Provider value={data}>
            {children}
        </ContextData.Provider>
    );
};

export default SharedRoute;