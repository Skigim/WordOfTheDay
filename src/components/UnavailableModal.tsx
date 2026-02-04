import React from 'react';
import { X, Lock, Sparkles } from 'lucide-react';

interface UnavailableModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
}

const UnavailableModal: React.FC<UnavailableModalProps> = ({ 
  isOpen, 
  onClose, 
  featureName = 'This feature' 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-amber-100 p-4 rounded-full">
            <Lock size={32} className="text-amber-600" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Coming Soon!
          </h2>
          <p className="text-gray-600 mb-6">
            {featureName} is not available yet. We're working on something special for you!
          </p>
          
          {/* Premium hint */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6 border border-indigo-100">
            <div className="flex items-center justify-center gap-2 text-indigo-700 font-medium">
              <Sparkles size={18} />
              <span>Stay tuned for updates</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnavailableModal;
