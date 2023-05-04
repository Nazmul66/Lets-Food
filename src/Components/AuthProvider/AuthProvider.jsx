import React, { useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    // githubProvider.addScope("email");

    // create user
    const createUsers = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn user
    const signInUser = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuth change state
     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (changeState) =>{
              setLoading(false)
              setUserInfo(changeState);
        })
        return () =>{
            return unSubscribe();
        }
     }, [])

     // googleSignIn
    const googleSignIn = () =>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider);
    }

    // githubSIgnIn
    const githubSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // sign out
    const userOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    // password reset
    const passwordReset = (email) =>{
        return sendPasswordResetEmail(auth, email);
     }

    const allAuth = {
        userInfo,
        createUsers,
        signInUser,
        googleSignIn,
        githubSignIn,
        userOut,
        passwordReset,
        loading
    }
    return (
        <AuthContext.Provider value={allAuth}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;