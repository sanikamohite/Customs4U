import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import { auth } from "./config";
import { setUserInStorage, removeUserFromStorage } from '../utils/storage';
import { createUserDocument, getUserDocument } from './firestore';

// Sign up with email and password
export const signUpWithEmail = async (email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update the user's profile with the username
    await updateProfile(userCredential.user, {
      displayName: username
    });

    // Create user document in Firestore
    await createUserDocument(userCredential.user, { username });

    setUserInStorage(userCredential.user);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// Sign in with email and password
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Ensure user document exists in Firestore
    await createUserDocument(userCredential.user);
    
    setUserInStorage(userCredential.user);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    
    // Ensure user document exists in Firestore
    await createUserDocument(userCredential.user);
    
    setUserInStorage(userCredential.user);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    removeUserFromStorage();
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Auth state observer
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Get the user document from Firestore
      const userDoc = await getUserDocument(user.uid);
      callback({ ...user, firestoreData: userDoc });
    } else {
      callback(null);
    }
  });
};
