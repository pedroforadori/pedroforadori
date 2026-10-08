import { motion } from 'framer-motion'
import { useLoading } from '../contexts/LoadingContentContext'

export function Hero() {
    const { isLoading } = useLoading()

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
                    text-[clamp(3rem,11vw,9.5rem)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoading ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Pedro<br />Foradori
                </motion.h1>

                <motion.p
                    className="mt-8 max-w-2xl text-2xl font-semibold leading-snug text-white max-sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoading ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Desenvolvedor Web e Mobile criando produtos digitais
                    com <span className="text-green-500">React</span>,{' '}
                    <span className="text-green-500">Next.js</span> e{' '}
                    <span className="text-green-500">React Native</span>
                </motion.p>
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
