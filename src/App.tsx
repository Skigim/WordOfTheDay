import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Header from './components/Header';
import WordHero from './components/WordHero';
import QuizModule from './components/QuizModule';
import WordMine from './components/WordMine';
import HistoryView from './components/HistoryView';
import UnavailableModal from './components/UnavailableModal';
import LoginPage from './components/LoginPage';
import UsernameSetupModal from './components/UsernameSetupModal';
import { getTodaysWord, getPastWords } from './data/wordData';
import { FEATURE_FLAGS } from './config/featureFlags';
import { useAuth } from './hooks/useAuth';
import { useUserProfile } from './hooks/useUserProfile';
import type { ViewMode, WordData } from './types';

export default function App() {
  const { user, loading: authLoading } = useAuth();
  const { profile, loading: profileLoading, refreshProfile } = useUserProfile();
  
  const [currentView, setCurrentView] = useState<ViewMode>('today');
  // Use lazy initialization to get today's word on mount
  const [currentWord, setCurrentWord] = useState<WordData | null>(() => getTodaysWord());
  const [showUnavailableModal, setShowUnavailableModal] = useState(false);
  const [showUsernameSetup, setShowUsernameSetup] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Show username setup for new users who haven't set a username
  const shouldPromptUsername = user && profile && !profile.username && !showUsernameSetup;

  const handleViewChange = (view: ViewMode) => {
    if (view === 'history' && !FEATURE_FLAGS.HISTORY_ENABLED) {
      setShowUnavailableModal(true);
      return;
    }
    
    setAnimate(true);
    setTimeout(() => {
      setCurrentView(view);
      if (view === 'today') {
        setCurrentWord(getTodaysWord());
      }
      setAnimate(false);
    }, 300);
  };

  const handleSelectHistoryWord = (word: WordData) => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentWord(word);
      setCurrentView('today');
      setAnimate(false);
    }, 300);
  };

  // Show loading spinner while checking auth
  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!user) {
    return <LoginPage />;
  }

  if (!currentWord) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading today's word...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-12">
      <Header 
        currentView={currentView} 
        onViewChange={handleViewChange}
        currentDate={currentWord.date}
        onEditUsername={() => setShowUsernameSetup(true)}
      />

      <main className={`max-w-4xl mx-auto px-4 md:px-8 transition-opacity duration-300 ${animate ? 'opacity-0' : 'opacity-100'}`}>
        
        {currentView === 'history' ? (
          <HistoryView 
            words={getPastWords()} 
            onSelectWord={handleSelectHistoryWord}
          />
        ) : (
          <>
            {/* Main Word Display */}
            <WordHero data={currentWord} />

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Activity 1: Context Quiz */}
              <div className="h-full">
                <QuizModule data={currentWord} />
              </div>

              {/* Activity 2: Word Mine Game */}
              <div className="h-full">
                <WordMine word={currentWord.word} />
              </div>

            </div>

            {/* Footer / Writing Prompt Idea */}
            <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                        <Sparkles size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">Challenge Yourself</h3>
                        <p className="text-gray-500 text-sm">Try using <span className="font-serif italic text-indigo-600 font-bold">{currentWord.word}</span> in a conversation today.</p>
                    </div>
                </div>
                <button className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    Share Definition
                </button>
            </div>
          </>
        )}

      </main>

      {/* Unavailable Feature Modal */}
      <UnavailableModal
        isOpen={showUnavailableModal}
        onClose={() => setShowUnavailableModal(false)}
        featureName="Word History"
      />

      {/* Username Setup Modal for new users */}
      {(shouldPromptUsername || showUsernameSetup) && user && (
        <UsernameSetupModal
          uid={user.uid}
          currentUsername={profile?.username}
          onComplete={async () => {
            await refreshProfile();
            setShowUsernameSetup(false);
          }}
          onSkip={() => setShowUsernameSetup(false)}
        />
      )}
    </div>
  );
}
