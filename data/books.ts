export type Book = {
  title: string
  subtitle?: string
  author: string
  feeling: string
  image?: string
  gradient?: string
}

export type QueuedBook = {
  title: string
  author: string
  note: string
}

export const READING_QUEUE: QueuedBook[] = [
  {
    title: 'I Want to Die but I Want to Eat Tteokbokki',
    author: 'Baek Sehee',
    note: 'Bought for the title. Expecting therapy, staying for the snacks.',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    note: 'Because apparently compounding applies to feelings too.',
  },
  {
    title: 'The Art of Thinking Clearly',
    author: 'Rolf Dobelli',
    note: '99 thinking errors — I like to collect them personally before reading about them.',
  },
]

export const BOOKS: Book[] = [
  {
    title: 'রূপা',
    subtitle: 'Rupa',
    author: 'Humayun Ahmed',
    feeling: "Rupa doesn't shout. It sits with you quietly and refuses to leave.",
    image: '/static/images/books/rupa.gif',
  },
  {
    title: 'ময়ূরাক্ষী',
    subtitle: 'Moyurakkhi',
    author: 'Humayun Ahmed',
    feeling: 'Walking barefoot with Himu for the first time — suddenly logic felt overrated.',
    image: '/static/images/books/moyurakkhi.jpg',
  },
  {
    title: 'হিমু সমগ্র',
    subtitle: 'Himu Somogro',
    author: 'Humayun Ahmed',
    feeling:
      'Himu is my favourite character of all time. A man in a yellow panjabi with no pockets, and I envy his freedom every single day.',
    image: '/static/images/books/himu-somogro.jpg',
  },
  {
    title: 'অন্য ভুবন',
    subtitle: 'Onno Vubon',
    author: 'Humayun Ahmed',
    feeling:
      "Misir Ali's cold logic meets something that shouldn't exist. Thought about it for weeks.",
    image: '/static/images/books/onno-vubon.png',
  },
  {
    title: 'মাতাল হাওয়া',
    subtitle: 'Matal Hawa',
    author: 'Humayun Ahmed',
    feeling: 'History that reads like a memory you never lived but somehow miss.',
    image: '/static/images/books/matal-hawa.gif',
  },
  {
    title: 'অপেক্ষা',
    subtitle: 'Opekkha',
    author: 'Humayun Ahmed',
    feeling: 'A whole life spent waiting for a door to open. Quietly devastating.',
    image: '/static/images/books/opekkha.png',
  },
  {
    title: 'প্যারাডক্সিক্যাল সাজিদ',
    subtitle: 'Paradoxical Sajid',
    author: 'Arif Azad',
    feeling:
      "Tea-stall debates about faith and logic. You argue with the book — that's the fun of it.",
    image: '/static/images/books/paradoxical-sajid.jpg',
  },
  {
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    feeling: 'Woke up as a bug, stayed for the family. Horrifyingly relatable on Monday mornings.',
    image: '/static/images/books/metamorphosis.jpg',
  },
  {
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom',
    feeling: 'A dying professor taught me more about living than any productivity book ever did.',
    image: '/static/images/books/tuesdays-with-morrie.jpg',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    feeling: 'The only compound interest I truly believe in — 1% better, every day.',
    image: '/static/images/books/atomic-habits.jpg',
  },
  {
    title: 'Dopamine Detox',
    author: 'Thibaut Meurisse',
    feeling: 'Read it in one sitting, then checked my phone fourteen times. Still working on it.',
    image: '/static/images/books/dopamine-detox.jpg',
  },
]
