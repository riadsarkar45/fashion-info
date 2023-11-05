import { createContext, useEffect, useState } from "react";
import auth from "../Fibase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const creatUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, imgUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgUrl
        })
    }
    const logOut = () =>{
        return signOut(auth)
    }
    useEffect(() =>{
        const unSubsCribe =  onAuthStateChanged(auth, (currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        }))
        return () =>{
            return unSubsCribe;
        }
    }, [])
    const authInfo = {creatUser, SignIn, logOut, user, updateUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;