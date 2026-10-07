import { Hero } from '../components/hero'
import Work from '../components/work'
import About from '../components/about'
import Contact from '../components/contact'

export default function Home() {
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
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600, // revalidate a cada 1 hora
  }
}
