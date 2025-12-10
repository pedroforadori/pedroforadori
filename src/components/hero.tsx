import { motion } from 'framer-motion'
import { useTypeWriter } from '../hooks/useTypeWriter'
import { useLoading } from '../contexts/LoadingContentContext'

const HERO_LINES = [
    'PEDRO FORADORI DESENVOLVEDOR WEB E MOBILE',
    'CONFIRA MEUS PROJETOS E SKILLS ROLANDO O SITE PRA BAIXO',
]
const CHAR_DELAY = 190
const BETWEEN_LINES_DELAY = 190

export function Hero() {
    const { isLoading } = useLoading()
    const displayedText = useTypeWriter(HERO_LINES, CHAR_DELAY, BETWEEN_LINES_DELAY)

    return (
        <div className="flex flex-col max-sm:p-2">
            <div className="text-white h-screen text-5xl flex flex-col justify-center items-center w-full px-4">
                <motion.p
                    className="w-2/3 max-2xl:text-5xl max-lg:text-2xl max-sm:text-lg max-sm:w-full text-center"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                >
                    <span className="whitespace-pre-wrap leading-tight science-gothic text-justify">
                        {isLoading ? '' : displayedText}
                        <span className="inline-block ml-1 animate-pulse">|</span>
                    </span>
                </motion.p>
            </div>
        </div>
    )
}