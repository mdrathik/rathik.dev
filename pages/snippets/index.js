import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import SnippetsLayout from '@/layouts/SnippetsLayout'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets')
  return { props: { snippets } }
}

export default function Snippet({ snippets }) {
  return (
    <>
      <PageSEO title={`Snippets - ${siteMetadata.author}`} description={siteMetadata.snippets} />
      <SnippetsLayout snippets={snippets} title="Snippets" />
    </>
  )
}
