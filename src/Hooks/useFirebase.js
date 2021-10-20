import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // onAuthStateChange method to get user info
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    // creating user method
    const handleRegistration = (regEmail,regPassword) => {
        createUserWithEmailAndPassword(auth, regEmail, regPassword)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    // google sign in method
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setError("");
                // console.log(user);
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                // console.log(error);
                setError(errorMessage);
            });
    };
    // email sign in method
    const handleEmailSignIn = (loginEmail, loginPassword) => {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setError("");
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };
    // log out method
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
            setError(error.message);
        });
    };

    return {
        user,
        error,
        handleRegistration,
        handleGoogleSignIn,
        handleEmailSignIn,
        logOut,
    }
}

export default useFirebase