import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { DownloadSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import Social from "./social";

const CV_URL = '/files/pedro-foradori-cv.pdf'
const CV_FILENAME = 'Pedro Foradori - CV.pdf'

const MENU_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Trabalhos', href: '/#work-section' },
    { label: 'Sobre mim', href: '/#about-section' },
    { label: 'Contato', href: '/#contact-section' },
]

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // depois do topo, o header ganha fundo para não brigar com o conteúdo que passa por baixo
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-10 py-6 transition-colors duration-300 max-sm:px-5 max-sm:py-4 ${scrolled ? 'bg-ink-900/80 backdrop-blur-md' : ''}`}>
                <Link href="/" className="font-display uppercase text-4xl leading-none tracking-tight max-sm:text-2xl">
                    <span className="text-green-500">Pedro</span>{' '}
                    <span className="text-green-700">Foradori</span>
                </Link>

                <div className="flex items-center gap-8 max-sm:gap-5">
                    <a
                        href={CV_URL}
                        download={CV_FILENAME}
                        className="flex items-center gap-2 rounded-full border border-green-500 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-green-500 transition-colors hover:bg-green-500 hover:text-ink-900 max-sm:px-3"
                    >
                        <DownloadSimple size={16} weight="bold" />
                        BAIXAR CV
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-3 text-green-500 hover:text-green-300 transition-colors"
                        aria-label="Abrir menu"
                    >
                        <MenuIcon />
                        <span className="text-sm font-semibold tracking-[0.3em] max-sm:hidden">MENU</span>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="fixed inset-0 z-50 bg-ink-900/95 backdrop-blur-sm flex flex-col justify-center px-16 max-sm:px-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-10 text-sm font-semibold tracking-[0.3em] text-green-500 hover:text-green-300 max-sm:right-5"
                        >
                            FECHAR
                        </button>

                        <ul className="flex flex-col gap-2">
                            {MENU_ITEMS.map((item, i) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-display uppercase text-7xl text-white/80 hover:text-green-500 transition-colors max-sm:text-5xl"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-12 -ml-2 flex w-fit flex-col items-center gap-4">
                            <Social />
                            <a
                                href={CV_URL}
                                download={CV_FILENAME}
                                className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-green-500 hover:text-green-300"
                            >
                                <DownloadSimple size={20} weight="bold" />
                                BAIXAR CV
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}

function MenuIcon() {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M3 13 L13 3" />
            <path d="M9 23 L23 9" />
        </svg>
    )
}
