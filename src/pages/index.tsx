import { Hero } from '../components/hero'
import { ScrollArrow } from '../components/scrollArrow'
import useIsAtBottom from '../hooks/useIsAtBottom'
import Work from '../components/work'
import About from '../components/about'
import Contact from '../components/contact'
import { useLoading } from '../contexts/LoadingContentContext'

export default function Home() {
  const isAtBottom = useIsAtBottom()
  const { isLoading } = useLoading()

  return (
    <>
      <Hero />
      <div id="work-section">
        <Work />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      {isLoading ? null : (
        <ScrollArrow isAtBottom={isAtBottom} />
      )}

    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600, // revalidate a cada 1 hora
  }
}
