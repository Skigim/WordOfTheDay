import type { WordData } from '../types';
import { getTodayDateString, isPastDate } from '../utils/dateUtils';

export const WORD_DATA: WordData[] = [
  {
    id: 1,
    word: "Ephemeral",
    phonetic: "/ɪˈfem.ər.əl/",
    type: "adjective",
    definition: "Lasting for a very short time; transitory.",
    example: "The ephemeral beauty of cherry blossoms reminds us to appreciate fleeting moments.",
    etymology: "From Greek 'ephemeros' meaning 'lasting only a day'.",
    date: "2026-02-04",
    quiz: {
      topic: "Biology",
      question: "Which of these organisms has an ephemeral adult lifespan of only 24 hours?",
      options: [
        "Butterfly",
        "Mayfly",
        "Housefly",
        "Dragonfly"
      ],
      correctIndex: 1
    }
  },
  {
    id: 2,
    word: "Sonder",
    phonetic: "/ˈsɒn.dər/",
    type: "noun",
    definition: "The realization that each random passerby is living a life as vivid and complex as your own.",
    example: "Sitting on the train, she was suddenly struck by sonder as she looked at the tired commuters.",
    etymology: "Coined by John Koenig for The Dictionary of Obscure Sorrows.",
    date: "2026-02-05",
    quiz: {
      topic: "Psychology",
      question: "Which cognitive concept is most closely related to the *opposite* of sonder (thinking you are the main character)?",
      options: [
        "Imposter Syndrome",
        "Main Character Syndrome",
        "Solipsism",
        "Deja Vu"
      ],
      correctIndex: 2
    }
  },
  {
    id: 3,
    word: "Apricity",
    phonetic: "/əˈprɪ.sɪ.ti/",
    type: "noun",
    definition: "The warmth of the sun in winter.",
    example: "The cat slept on the windowsill, soaking up the apricity on the cold January afternoon.",
    etymology: "From Latin 'apricitas' (sunniness).",
    date: "2026-02-06",
    quiz: {
      topic: "Astronomy",
      question: "Why does the winter sun feel weaker than the summer sun in the Northern Hemisphere?",
      options: [
        "The sun actually shrinks in winter",
        "The Earth is farther away from the sun",
        "Sunlight hits the Earth at a shallower angle",
        "There are more clouds in winter"
      ],
      correctIndex: 2
    }
  },
  {
    id: 4,
    word: "Vellichor",
    phonetic: "/ˈvel.ɪ.kɔːr/",
    type: "noun",
    definition: "The strange wistfulness of used bookstores, filled with thousands of old books you'll never have time to read.",
    example: "Wandering through the dusty aisles, she felt a deep sense of vellichor wash over her.",
    etymology: "Coined by John Koenig for The Dictionary of Obscure Sorrows.",
    date: "2026-02-07",
    quiz: {
      topic: "Literature",
      question: "Approximately how many books does the average person read in their lifetime?",
      options: [
        "500-1,000",
        "1,500-3,000",
        "4,000-5,000",
        "10,000+"
      ],
      correctIndex: 1
    }
  },
  {
    id: 5,
    word: "Hiraeth",
    phonetic: "/ˈhɪər.aɪθ/",
    type: "noun",
    definition: "A deep longing for a home you can't return to, or one that never was.",
    example: "Moving to a new country, she felt hiraeth for the childhood summers that existed only in memory.",
    etymology: "Welsh word with no direct English translation.",
    date: "2026-02-08",
    quiz: {
      topic: "Linguistics",
      question: "Which language family does Welsh belong to?",
      options: [
        "Germanic",
        "Romance",
        "Celtic",
        "Slavic"
      ],
      correctIndex: 2
    }
  },
  {
    id: 6,
    word: "Petrichor",
    phonetic: "/ˈpe.trɪ.kɔːr/",
    type: "noun",
    definition: "A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.",
    example: "After the storm passed, the air was thick with the scent of petrichor.",
    etymology: "From Greek 'petra' (stone) and 'ichor' (the fluid that flows in the veins of the gods).",
    date: "2026-02-09",
    quiz: {
      topic: "Meteorology & Chemistry",
      question: "What chemical compound, produced by soil bacteria, is primarily responsible for the smell of petrichor?",
      options: [
        "Ozone",
        "Geosmin",
        "Petroleum",
        "Chlorine"
      ],
      correctIndex: 1
    }
  }
];

/**
 * Get today's word based on the current date
 * Falls back to the most recent past word if no word is scheduled for today
 */
export function getTodaysWord(): WordData | null {
  const today = getTodayDateString();
  
  // First, try to find an exact match for today
  const todaysWord = WORD_DATA.find(word => word.date === today);
  if (todaysWord) return todaysWord;
  
  // If no word for today, find the most recent past word
  const pastWords = WORD_DATA
    .filter(word => isPastDate(word.date))
    .sort((a, b) => b.date.localeCompare(a.date));
  
  return pastWords[0] || WORD_DATA[0] || null;
}

/**
 * Get all words from past dates (for history view)
 * Sorted by date, oldest first
 */
export function getPastWords(): WordData[] {
  const today = getTodayDateString();
  
  return WORD_DATA
    .filter(word => word.date < today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Get a specific word by its ID
 */
export function getWordById(id: number): WordData | undefined {
  return WORD_DATA.find(word => word.id === id);
}
