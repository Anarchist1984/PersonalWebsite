// pages/index.js
'use client'
import { useState, useEffect } from "react";
import app from './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, [auth]);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Set user display name
      await updateProfile(user, {
        displayName: "User's Display Name"
      });

      setUser(user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Update user state to null after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Print user information
  useEffect(() => {
    if (user) {
      console.log("Display Name:", user.displayName);
      console.log("Email:", user.email);
      console.log("Email Verified:", user.emailVerified);
      console.log("Photo URL:", user.photoURL);
      console.log("UID:", user.uid);
      console.log("Phone Number:", user.phoneNumber);
      console.log("Provider Data:", user.providerData);
      console.log("Metadata:", user.metadata);
    }
  }, [user]);

  return (
    <div>
      {!user && (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
      {user && (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
