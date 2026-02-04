import React, { useState } from 'react';
import { User, Check, X } from 'lucide-react';
import { updateUsername } from '../services/userProfileService';

interface UsernameSetupModalProps {
  uid: string;
  currentUsername?: string | null;
  onComplete: (username: string) => void;
  onSkip: () => void;
}

const UsernameSetupModal: React.FC<UsernameSetupModalProps> = ({
  uid,
  currentUsername,
  onComplete,
  onSkip,
}) => {
  const [username, setUsername] = useState(currentUsername || '');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateUsername = (value: string): string | null => {
    if (value.length < 3) {
      return 'Username must be at least 3 characters';
    }
    if (value.length > 20) {
      return 'Username must be 20 characters or less';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return 'Username can only contain letters, numbers, and underscores';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateUsername(username);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await updateUsername(uid, username);
      onComplete(username);
    } catch (err) {
      console.error('Failed to update username:', err);
      setError('Failed to save username. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '');
    setUsername(value);
    setError(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <User size={32} className="text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Choose Your Username
          </h2>
          <p className="text-gray-500 mt-2">
            Pick a unique username for your profile
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
              <input
                id="username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="your_username"
                maxLength={20}
                className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                  error ? 'border-red-300 bg-red-50' : 'border-gray-200'
                }`}
                autoFocus
              />
            </div>
            
            {/* Character count */}
            <div className="flex justify-between items-center mt-2">
              {error ? (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <X size={14} />
                  {error}
                </p>
              ) : username.length >= 3 ? (
                <p className="text-sm text-green-500 flex items-center gap-1">
                  <Check size={14} />
                  Looks good!
                </p>
              ) : (
                <p className="text-sm text-gray-400">
                  At least 3 characters
                </p>
              )}
              <span className="text-sm text-gray-400">
                {username.length}/20
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onSkip}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              Skip for now
            </button>
            <button
              type="submit"
              disabled={loading || username.length < 3}
              className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : 'Save Username'}
            </button>
          </div>
        </form>

        {/* Privacy note */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Your username will be visible on leaderboards and public profiles.
        </p>
      </div>
    </div>
  );
};

export default UsernameSetupModal;
