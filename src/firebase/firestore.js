import { db } from './config';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

// Create or update user document in Firestore
export const createUserDocument = async (user, additionalData = {}) => {
  if (!user) return;

  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { email, displayName, photoURL } = user;
    
    try {
      await setDoc(userRef, {
        email,
        displayName: displayName || additionalData.username || '',
        photoURL: photoURL || '',
        createdAt: serverTimestamp(),
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  }

  return userRef;
};

// Get user document from Firestore
export const getUserDocument = async (uid) => {
  if (!uid) return null;
  
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { id: userSnap.id, ...userSnap.data() };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching user document:', error);
    return null;
  }
};
