// Define your data shapes here to ensure consistency across the app.

export interface QuizData {
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface WordData {
  id: number;
  word: string;
  phonetic: string;
  type: string;
  definition: string;
  example: string;
  etymology: string;
  quiz: QuizData;
  /** Date this word is scheduled for (YYYY-MM-DD format) */
  date: string;
}

/** View modes for the application */
export type ViewMode = 'today' | 'history';
