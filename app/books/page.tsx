import { genPageMetadata } from 'app/seo'
import NextImage from 'next/image'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { BOOKS, READING_QUEUE, type Book } from '~/data/books'

export let metadata = genPageMetadata({
  title: 'Books',
  description: 'Books I read, and how they made me feel.',
})

function BookCover({ book }: { book: Book }) {
  if (book.image) {
    return (
      <NextImage
        src={book.image}
        alt={book.title}
        width={112}
        height={160}
        className="h-40 w-28 shrink-0 rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.03]"
      />
    )
  }
  return (
    <div
      className={`flex h-40 w-28 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br p-2 shadow-lg transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.03] ${book.gradient}`}
    >
      <span className="text-center text-lg font-bold leading-snug text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
        {book.title}
      </span>
    </div>
  )
}

export default function BooksPage() {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Books"
        description="রিভিউ-টিভিউ না, শুধু কোন বইটা পড়ে কেমন লেগেছিল সেটুকুই। কিছু বই মন ভালো করে দিয়েছে, কিছু বই রাতের ঘুম কেড়ে নিয়েছে, আর দু-একটা পড়ে মনে হয়েছে এই টাকায় চা-সিঙ্গাড়া খেলেই বেশি লাভ হতো। লিস্টে হুমায়ূন আহমেদই বেশি, আর সেটা নিয়ে আমি মোটেও অনুতপ্ত না। 📚"
        className="border-b border-gray-200 dark:border-gray-700"
      />

      <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:py-10">
        {BOOKS.map((book) => (
          <div
            key={book.title}
            className="group flex gap-5 rounded-2xl border border-gray-200/70 bg-white/60 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-rose-400/50 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-rose-500/40"
          >
            <BookCover book={book} />

            <div className="min-w-0">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{book.title}</h3>
              <p className="mt-0.5 font-mono text-xs text-gray-500 dark:text-gray-400">
                {book.subtitle ? `${book.subtitle} · ` : ''}
                {book.author}
              </p>
              <p className="mt-3 text-sm italic leading-6 text-gray-600 dark:text-gray-400">
                “{book.feeling}”
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 py-8 dark:border-gray-700 md:py-10">
        <p className="mb-6 font-mono text-sm text-rose-600 dark:text-rose-400">
          <span className="select-none text-gray-400 dark:text-gray-600">$ </span>cat queue.txt
        </p>
        <div className="space-y-4">
          {READING_QUEUE.map((book, idx) => (
            <div
              key={book.title}
              className="flex items-baseline gap-4 rounded-xl border border-dashed border-gray-300 bg-white/40 px-5 py-4 dark:border-gray-700 dark:bg-white/[0.02]"
            >
              <span className="font-mono text-sm text-rose-500/70 dark:text-rose-400/60">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <span className="font-semibold text-gray-900 dark:text-gray-100">{book.title}</span>
                <span className="ml-2 font-mono text-xs text-gray-500 dark:text-gray-400">
                  — {book.author}
                </span>
                <p className="mt-1 text-sm italic text-gray-500 dark:text-gray-400">{book.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
