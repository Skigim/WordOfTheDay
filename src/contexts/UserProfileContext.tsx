import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../hooks/useAuth';
import { getUserProfile, createOrUpdateProfile, type UserProfile } from '../services/userProfileService';
import { UserProfileContext } from './UserProfileContextType';

export function UserProfileProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      let userProfile = await getUserProfile(user.uid);
      
      // Create profile if it doesn't exist
      if (!userProfile) {
        await createOrUpdateProfile(user.uid, {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
        userProfile = await getUserProfile(user.uid);
      }
      
      setProfile(userProfile);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return;
    
    await createOrUpdateProfile(user.uid, updates);
    await fetchProfile();
  };

  const refreshProfile = async () => {
    await fetchProfile();
  };

  return (
    <UserProfileContext.Provider value={{ profile, loading, updateProfile, refreshProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
}
