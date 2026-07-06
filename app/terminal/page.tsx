import { genPageMetadata } from 'app/seo'
import { Terminal } from '~/components/terminal'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'

export let metadata = genPageMetadata({
  title: 'Terminal',
  description:
    "An interactive shell for rathik.dev. Type 'help', break things, find the easter eggs.",
})

export default function TerminalPage() {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Terminal"
        description={
          <>
            The playground. Type <code>help</code>, try the easter eggs, or just watch it type for
            you. No servers were harmed in the making of this shell.
          </>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:py-10">
        <Terminal />
      </div>
    </Container>
  )
}
