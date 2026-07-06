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
    note: 'এখনো পড়া হয়নি, তাই পুরোটাই আন্দাজ। মনে হচ্ছে একজন মানুষ থেরাপিস্টের সামনে বসে জীবনের সব মন খারাপের কথা বলবে, তারপর বাসায় ফিরে ঝাল টকবকি খেয়ে আবার বাঁচার ইচ্ছা ফিরে পাবে। যদি আন্দাজ ভুল হয়, দোষটা টাইটেলের, আমার না।',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    note: 'আমার আন্দাজ বলছে বইটার মূল কথা হলো টাকা জমাও, দেখানো কমাও, আর ধৈর্য ধরো। এই তিন লাইন বলতে লেখকের ৩০০ পেজ কেন লাগলো, সেটাই আপাতত আমার কাছে বড় রহস্য। পড়া শেষ হলে আসল রিভিউ দেবো, promise।',
  },
  {
    title: 'The Art of Thinking Clearly',
    author: 'Rolf Dobelli',
    note: 'শুনেছি এই বইয়ে ৯৯টা thinking error নিয়ে লেখা আছে। আমার দৃঢ় বিশ্বাস আমি নিয়মিত ১০০টা করি, মানে লেখকের চেয়ে এক ধাপ এগিয়েই আছি। এখন শুধু মিলিয়ে দেখা বাকি, কোনগুলো আমি লেখকের আগেই আবিষ্কার করে ফেলেছি।',
  },
]

export const BOOKS: Book[] = [
  {
    title: 'রূপা',
    subtitle: 'Rupa',
    author: 'Humayun Ahmed',
    feeling:
      'রূপার সাথে নিতুর অনেক মিল। নিতু আমার wife, রূপার মতোই ছবি আঁকে, আর যেকোনো প্রশ্নের ঝটপট উত্তর দিয়ে ফেলে। হিমু পড়তে গেলে অবশ্য নিতুর সাথে মিলটা আরও বেশি চোখে পড়ে, তবে এই রূপাও অনেকটাই নিতুর মতো। যদিও জানি, আমি পুরোপুরি হিমু হয়ে উঠতে পারিনি।',
    image: '/static/images/books/rupa.gif',
  },
  {
    title: 'ময়ূরাক্ষী',
    subtitle: 'Moyurakkhi',
    author: 'Humayun Ahmed',
    feeling: 'হিমুর সাথে প্রথম খালি পায়ে হাঁটা। হঠাৎ মনে হলো logic জিনিসটা আসলে overrated।',
    image: '/static/images/books/moyurakkhi.jpg',
  },
  {
    title: 'হিমু সমগ্র',
    subtitle: 'Himu Somogro',
    author: 'Humayun Ahmed',
    feeling:
      'হিমু আমার all-time favourite চরিত্র। পকেটছাড়া হলুদ পাঞ্জাবির এই লোকটার freedom দেখে আজও হিংসা হয়। মাঝে মাঝে ইচ্ছা করে সব ছেড়ে খালি পায়ে হাঁটা শুরু করি, তারপর মনে পড়ে কালকে আমার মিটিং আছে।',
    image: '/static/images/books/himu-somogro.jpg',
  },
  {
    title: 'অন্য ভুবন',
    subtitle: 'Onno Vubon',
    author: 'Humayun Ahmed',
    feeling:
      'মিসির আলির logic বনাম এমন কিছু, যেটা থাকার কথাই না। কয়েক সপ্তাহ মাথা থেকে নামেনি। আর হ্যাঁ, রাত জেগে পড়া শুরু করাটা ছিল জীবনের অন্যতম ভুল সিদ্ধান্ত।',
    image: '/static/images/books/onno-vubon.png',
  },
  {
    title: 'মাতাল হাওয়া',
    subtitle: 'Matal Hawa',
    author: 'Humayun Ahmed',
    feeling:
      'যে সময়টা দেখিনি, সেটার জন্যও মন খারাপ হয়। ইতিহাস না, যেন অন্য কারো স্মৃতির ভেতর ঢুকে পড়েছি। হুমায়ূন আহমেদ ইতিহাসকেও গল্পের মতো বলতে পারতেন, এই বইটা তার প্রমাণ।',
    image: '/static/images/books/matal-hawa.gif',
  },
  {
    title: 'অপেক্ষা',
    subtitle: 'Opekkha',
    author: 'Humayun Ahmed',
    feeling:
      'একটা মানুষ সারাজীবন শুধু অপেক্ষাই করে গেল। পড়া শেষেও বুকের ভেতর চাপটা থেকে যায়। কিছু চরিত্রের উপর রাগও হয়, কিন্তু রাগটা আসলে কার উপর, সেটা আজও ঠিক বুঝিনি।',
    image: '/static/images/books/opekkha.png',
  },
  {
    title: 'প্যারাডক্সিক্যাল সাজিদ',
    subtitle: 'Paradoxical Sajid',
    author: 'Arif Azad',
    feeling:
      'চায়ের কাপে বিশ্বাস আর logic-এর তর্ক। বইয়ের সাথে ঝগড়া করতে করতে পড়েছি, মজাটা আসলে ওখানেই।',
    image: '/static/images/books/paradoxical-sajid.jpg',
  },
  {
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    feeling: 'সকালে উঠে দেখি পোকা হয়ে গেছি। ভাবলাম, সোমবার সকালগুলোর সাথে পার্থক্যটা আসলে কোথায়?',
    image: '/static/images/books/metamorphosis.jpg',
  },
  {
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom',
    feeling: 'সবাই বলে life-changing বই। আমি পড়ে আহামরি কিছুই পাইনি। হয়তো আমিই উপযুক্ত পাঠক না।',
    image: '/static/images/books/tuesdays-with-morrie.jpg',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    feeling:
      'প্রতিদিন ১% better। পড়ার পর জীবনে ১%-ও কাজে লাগাতে পারিনি, কিন্তু আমি জানি কথাটা সত্যি।',
    image: '/static/images/books/atomic-habits.jpg',
  },
  {
    title: 'Dopamine Detox',
    author: 'Thibaut Meurisse',
    feeling:
      'এক বসায় পড়ে ফেললাম, তারপর চোদ্দবার ফোন চেক করলাম। কাজ চলছে, ধৈর্য ধরেন। বইটা ছোট বলেই হয়তো শেষ করতে পেরেছিলাম, সেটাও একটা irony।',
    image: '/static/images/books/dopamine-detox.jpg',
  },
]
