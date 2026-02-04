/**
 * User profile service for managing user data in Firestore
 */

import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const USERS_COLLECTION = 'users';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  username: string | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Get a user's profile from Firestore
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const docRef = doc(db, USERS_COLLECTION, uid);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      uid,
      email: data.email || null,
      displayName: data.displayName || null,
      photoURL: data.photoURL || null,
      username: data.username || null,
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
    };
  }
  
  return null;
}

/**
 * Create or update a user's profile in Firestore
 */
export async function createOrUpdateProfile(
  uid: string,
  data: {
    email?: string | null;
    displayName?: string | null;
    photoURL?: string | null;
    username?: string | null;
  }
): Promise<void> {
  const docRef = doc(db, USERS_COLLECTION, uid);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date(),
    });
  } else {
    await setDoc(docRef, {
      uid,
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

/**
 * Update just the username
 */
export async function updateUsername(uid: string, username: string): Promise<void> {
  const docRef = doc(db, USERS_COLLECTION, uid);
  await setDoc(docRef, {
    username,
    updatedAt: new Date(),
  }, { merge: true });
}

/**
 * Check if a username is available (not taken by another user)
 * For now, we'll skip this check - can be added with a separate usernames collection
 */
export async function isUsernameAvailable(username: string): Promise<boolean> {
  // TODO: Implement username uniqueness check with a separate collection
  // For now, always return true
  console.log('Checking username availability:', username);
  return true;
}
