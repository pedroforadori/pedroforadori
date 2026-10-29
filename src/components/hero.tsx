import { motion } from 'framer-motion'
import { useLoading } from '../contexts/LoadingContentContext'
import { WHATSAPP_URL } from '../data/contact'
import stackFront from '../data/stack-front'
import stackMobile from '../data/stack-mobile'
import stackBack from '../data/stack-back'

const HERO_STACKS = ['React', 'Next.js', 'React Native', 'TypeScript', 'Node.js', 'AWS']
const CAREER_START = new Date(2011, 7, 1) // agosto de 2011

// anos completos desde o início da carreira
function getYearsOfExperience() {
    const now = new Date()
    const years = now.getFullYear() - CAREER_START.getFullYear()
    return now.getMonth() < CAREER_START.getMonth() ? years - 1 : years
}

// conta só as stacks da seção que não aparecem na linha do hero
const otherStacksCount = [...stackFront, ...stackMobile, ...stackBack]
    .filter(item => !HERO_STACKS.some(name => name.toLowerCase() === item.title.toLowerCase()))
    .length

export function Hero() {
    const { isLoading } = useLoading()
    const yearsOfExperience = getYearsOfExperience()

    return (
        <section className="relative h-screen w-full overflow-hidden bg-ink-900">
            {/* foto em P&B com bordas esmaecendo para o fundo */}
            <div
                className="absolute left-1/2 top-0 h-full aspect-square -translate-x-1/2 bg-cover bg-center grayscale opacity-60"
                style={{
                    backgroundImage: 'url(/assets/pedro.jpg)',
                    maskImage: 'radial-gradient(ellipse 60% 70% at 50% 40%, #000 35%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 50% 40%, #000 35%, transparent 75%)',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/20 to-ink-900" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-16 text-center">
                <motion.h1
                    className="font-extrabold uppercase leading-[0.9] tracking-tight text-white/20 mix-blend-screen
                    text-[clamp(2.5rem,11vw,9.5rem)] max-sm:text-[clamp(2.5rem,15vw,4rem)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoading ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Pedro<br />Foradori
                </motion.h1>

                <motion.div
                    className="mt-8 max-w-3xl text-white max-sm:mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoading ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <p className="text-2xl font-bold leading-snug max-sm:text-lg">
                        Sites, sistemas e apps que funcionam de verdade.
                    </p>
                    <p className="mt-2 text-lg font-normal text-white/80 max-sm:text-sm">
                        Desenvolvedor Web e Mobile sênior há mais de {yearsOfExperience} anos.
                    </p>

                    <p className="mt-6 text-lg font-semibold text-green-500 max-sm:mt-4 max-sm:text-sm">
                        {HERO_STACKS.join(' · ')}{' '}
                        <a href="#stacks-section" className="whitespace-nowrap underline underline-offset-4 hover:text-green-400">
                            + {otherStacksCount} tecnologias
                        </a>
                    </p>
                </motion.div>

                <motion.div
                    className="mt-10 flex flex-wrap justify-center gap-4 max-sm:mt-8 max-sm:gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoading ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-green-500 px-7 py-3 font-semibold text-ink-900 transition hover:bg-green-400 max-sm:px-5 max-sm:text-sm"
                    >
                        Fale comigo sobre seu projeto
                    </a>
                    <a
                        href="#work-section"
                        className="rounded-full border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-ink-900 max-sm:px-5 max-sm:text-sm"
                    >
                        Ver projetos
                    </a>
                </motion.div>
            </div>
            {/* indicador de rolagem: linha fina com um traço verde descendo */}
            <a
                href="#work-section"
                aria-label="Rolar para os projetos"
                className="absolute right-[5%] top-1/2 z-20 flex h-40 w-6 -translate-y-1/2 justify-center max-sm:hidden"
            >
                <span className="relative h-full w-px overflow-hidden bg-white/10">
                    <span className="scroll-line absolute inset-0 bg-green-500" />
                </span>
            </a>
        </section>
    )
}
