import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {auth} from "../firebase/firebase.init";

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(loading, user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if (currentUser?.email) {
      //   const userData = {email: currentUser.email};
      //   fetch("https://knowledge-server-side-chi.vercel.app/jwt", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },

      //     body: JSON.stringify(userData),
      //   })
      //   .then((res)=>res.json())
      //     .then((data) => {
      //       console.log(data);
      //       const token = data.token;
      //       localStorage.setItem('token',token);
      //     })
      //     .catch((error) => console.log(error));
      // }
      // console.log("user in the auth state change", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
