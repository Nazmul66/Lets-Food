import React, { useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [userInfo, setUserInfo] = useState(null);

    // create user
    const createUsers = (email , password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn user
    const signInUser = (email , password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuth change state
     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (changeState) =>{
              setUserInfo(changeState);
        })
        return () =>{
            return unSubscribe();
        }
     }, [])

     // googleSignIn
    const googleSignIn = () =>{
       return signInWithPopup(auth, googleProvider);
    }

    // githubSIgnIn
    const githubSignIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    // sign out
    const userOut = () =>{
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
        passwordReset
    }
    return (
        <AuthContext.Provider value={allAuth}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;