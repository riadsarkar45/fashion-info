import { createContext, useEffect, useState } from "react";
import auth from "../Fibase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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
    const logOut = () => {
        return signOut(auth)
        setLoading(true)
    }
    useEffect(() =>{
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            setLoading(false)
            if(currentUser){
                axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }else {
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
        })
        return () => {
            return unsubsCribe;
        }
    }, [])
    const authInfo = { creatUser, SignIn, logOut, user, updateUser, isLoading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;