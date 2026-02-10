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
  },
  {
    id: 7,
    word: "Solivagant",
    phonetic: "/səˈlɪv.ə.ɡənt/",
    type: "adjective",
    definition: "Wandering alone.",
    example: "As a solivagant traveler, he preferred the quiet company of nature to bustling tour groups.",
    etymology: "From Latin 'solivagus', from 'solus' (alone) + 'vagari' (to wander).",
    date: "2026-02-10",
    quiz: {
      topic: "Travel & Literature",
      question: "Which famous book by Jon Krakauer chronicles the solivagant journey of Christopher McCandless?",
      options: [
        "On the Road",
        "Wild",
        "Into the Wild",
        "The Alchemist"
      ],
      correctIndex: 2
    }
  },
  {
    id: 8,
    word: "Ineffable",
    phonetic: "/ɪnˈef.ə.bəl/",
    type: "adjective",
    definition: "Too great or extreme to be expressed or described in words.",
    example: "The ineffable beauty of the sunset left them all in silent awe.",
    etymology: "From Latin 'ineffabilis', from 'in-' (not) + 'effabilis' (capable of being expressed).",
    date: "2026-02-11",
    quiz: {
      topic: "Philosophy",
      question: "Which of the following emotions is most often described as ineffable?",
      options: [
        "Mild annoyance",
        "Sublime awe",
        "Hunger",
        "Boredom"
      ],
      correctIndex: 1
    }
  },
  {
    id: 9,
    word: "Limerence",
    phonetic: "/ˈlɪm.ər.əns/",
    type: "noun",
    definition: "The state of being infatuated or obsessed with another person, typically experienced involuntarily.",
    example: "His teenage years were marked by a state of intense limerence for his lab partner.",
    etymology: "Coined by psychologist Dorothy Tennov in 1979.",
    date: "2026-02-12",
    quiz: {
      topic: "Psychology",
      question: "According to Dorothy Tennov, what distinguishes limerence from other forms of love?",
      options: [
        "It is always platonic",
        "It involves an intrusive, obsessive desire for reciprocation",
        "It only lasts for a few days",
        "It is purely physical"
      ],
      correctIndex: 1
    }
  },
  {
    id: 10,
    word: "Defenestration",
    phonetic: "/diːˌfen.əˈstreɪ.ʃən/",
    type: "noun",
    definition: "The action of throwing someone out of a window.",
    example: "The political tension was so high that fears of a third defenestration began to spread.",
    etymology: "From Latin 'de-' (down from) + 'fenestra' (window).",
    date: "2026-02-13",
    quiz: {
      topic: "History",
      question: "The Defenestration of Prague in 1618 helped trigger which major conflict?",
      options: [
        "The Hundred Years' War",
        "The Thirty Years' War",
        "World War I",
        "The Napoleonic Wars"
      ],
      correctIndex: 1
    }
  },
  {
    id: 11,
    word: "Serendipity",
    phonetic: "/ˌser.ənˈdɪp.ɪ.ti/",
    type: "noun",
    definition: "The occurrence and development of events by chance in a happy or beneficial way.",
    example: "It was pure serendipity that we met at the coffee shop right before the rain started.",
    etymology: "Coined by Horace Walpole, inspired by the fairy tale 'The Three Princes of Serendip'.",
    date: "2026-02-14",
    quiz: {
      topic: "Science History",
      question: "Which of these medical discoveries is a famous example of serendipity?",
      options: [
        "The Polio Vaccine",
        "Penicillin",
        "MRI technology",
        "Insulin"
      ],
      correctIndex: 1
    }
  },
  {
    id: 12,
    word: "Meliorism",
    phonetic: "/ˈmiː.li.ə.rɪ.zəm/",
    type: "noun",
    definition: "The belief that the world can be made better by human effort.",
    example: "Despite the challenges, her strict adherence to meliorism kept her working for social change.",
    etymology: "From Latin 'melior' (better).",
    date: "2026-02-15",
    quiz: {
      topic: "Social Philosophy",
      question: "How does meliorism differ from optimism?",
      options: [
        "Optimism believes things will get better; meliorism believes we can *make* them better",
        "Optimism is passive; meliorism is pessimistic",
        "They are exactly the same",
        "Meliorism focuses only on the past"
      ],
      correctIndex: 0
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
