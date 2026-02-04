/**
 * Utility functions for tracking quiz completion state
 * Uses localStorage to persist completion status across sessions
 */

const STORAGE_KEY = 'lexicon_completed_quizzes';

/**
 * Get the set of completed word IDs
 */
export function getCompletedQuizzes(): Set<number> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const ids = JSON.parse(stored) as number[];
      return new Set(ids);
    }
  } catch (e) {
    console.warn('Failed to read completed quizzes from localStorage:', e);
  }
  return new Set();
}

/**
 * Mark a quiz as completed
 */
export function markQuizCompleted(wordId: number): void {
  try {
    const completed = getCompletedQuizzes();
    completed.add(wordId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  } catch (e) {
    console.warn('Failed to save completed quiz to localStorage:', e);
  }
}

/**
 * Check if a specific quiz is completed
 */
export function isQuizCompleted(wordId: number): boolean {
  return getCompletedQuizzes().has(wordId);
}

/**
 * Clear all completion data (useful for testing)
 */
export function clearCompletedQuizzes(): void {
  localStorage.removeItem(STORAGE_KEY);
}
