import { createContext, useEffect, useState } from "react";
import auth from "../Fibase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }
    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }
    const updateUser = (name, imgUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgUrl
        })
        setLoading(true)
    }
    const provider = new GoogleAuthProvider ()
    const googleSignIn = () =>{
        return signInWithPopup(auth, provider);
        setLoading(true)
    }
    const logOut = () => {
        return signOut(auth)
        setLoading(true)
    }
    useEffect(() =>{
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setLoading(false)
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            if(currentUser){
                axios.post('https://assignment-11-server-one-sandy.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }else {
                axios.post('https://assignment-11-server-one-sandy.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
        })
        return () => {
            return unsubsCribe;
        }
    }, [])
    const authInfo = { creatUser, SignIn, logOut, user, updateUser, isLoading, googleSignIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;