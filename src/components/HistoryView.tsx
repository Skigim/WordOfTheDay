import React from 'react';
import { Calendar, ArrowRight, BookOpen, Check } from 'lucide-react';
import type { WordData } from '../types';
import { formatShortDate } from '../utils/dateUtils';
import { isQuizCompleted } from '../utils/quizStorage';

interface HistoryViewProps {
  words: WordData[];
  onSelectWord: (word: WordData) => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ words, onSelectWord }) => {
  if (words.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar size={32} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">No History Yet</h3>
        <p className="text-gray-500">Past words of the day will appear here.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Word History</h2>
        <p className="text-gray-500">Revisit past words of the day</p>
      </div>

      {/* Word Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {words.map((word) => {
          const completed = isQuizCompleted(word.id);
          return (
            <button
              key={word.id}
              onClick={() => onSelectWord(word)}
              className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left relative"
            >
              {/* Completion Badge */}
              {completed && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
              )}
              
              {/* Date Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  <Calendar size={12} />
                  {formatShortDate(word.date)}
                </span>
                <ArrowRight 
                  size={16} 
                  className="text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" 
                />
              </div>

            {/* Word */}
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
              {word.word}
            </h3>
            
            {/* Type & Phonetic */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <span className="italic">{word.type}</span>
              <span className="text-gray-300">•</span>
              <span className="font-mono text-xs">{word.phonetic}</span>
            </div>

            {/* Definition Preview */}
            <p className="text-sm text-gray-600 line-clamp-2">
              {word.definition}
            </p>
          </button>
          );
        })}
      </div>

      {/* Stats Footer */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 flex items-center justify-center gap-3 border border-indigo-100">
        <BookOpen size={20} className="text-indigo-600" />
        <span className="text-indigo-700 font-medium">
          {words.length} word{words.length !== 1 ? 's' : ''} in your vocabulary journey
        </span>
      </div>
    </div>
  );
};

export default HistoryView;
