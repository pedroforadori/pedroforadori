import { AnimatePresence, motion, MotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import workItem from '../data/work-item'

export type ProjectItem = (typeof workItem)[number]

const CARD_WIDTH = 380
const CURSOR_GAP = 28
const EDGE = 16
const HEADER_HEIGHT = 96

// Só faz sentido em dispositivos com mouse; no toque o clique já abre o detalhe
export function useCanHover() {
    const [canHover, setCanHover] = useState(false)

    useEffect(() => {
        const query = window.matchMedia('(hover: hover) and (pointer: fine)')
        setCanHover(query.matches)
        const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches)
        query.addEventListener('change', onChange)
        return () => query.removeEventListener('change', onChange)
    }, [])

    return canHover
}

interface ProjectPreviewProps {
    item: ProjectItem | null
    index: number
    mouseX: MotionValue<number>
    mouseY: MotionValue<number>
}

// Card flutuante que acompanha o cursor com o resumo do projeto
export default function ProjectPreview({ item, index, mouseX, mouseY }: ProjectPreviewProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const x = useSpring(0, { stiffness: 300, damping: 30, mass: 0.6 })
    const y = useSpring(0, { stiffness: 300, damping: 30, mass: 0.6 })

    useEffect(() => {
        // posiciona ao lado do cursor, virando para a esquerda perto da borda e sem sair da tela
        const place = () => {
            const vw = window.innerWidth, vh = window.innerHeight
            const height = cardRef.current?.offsetHeight ?? 320
            const mx = mouseX.get(), my = mouseY.get()
            const left = mx + CURSOR_GAP + CARD_WIDTH > vw - EDGE ? mx - CURSOR_GAP - CARD_WIDTH : mx + CURSOR_GAP
            const top = Math.min(Math.max(my - height / 2, HEADER_HEIGHT), vh - height - EDGE)
            x.set(left)
            y.set(top)
        }
        place()
        const unsubX = mouseX.onChange(place)
        const unsubY = mouseY.onChange(place)
        return () => {
            unsubX()
            unsubY()
        }
    }, [item, mouseX, mouseY, x, y])

    return (
        <AnimatePresence>
            {item && (
                <motion.div
                    ref={cardRef}
                    className="pointer-events-none fixed left-0 top-0 z-30 rounded-2xl border border-white/15 bg-ink-800/95 p-6 shadow-2xl backdrop-blur"
                    style={{ x, y, width: CARD_WIDTH }}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden
                >
                    <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-white p-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.logo} alt="" className="max-h-full max-w-full object-contain" />
                            </div>
                            <h4 className="text-base font-bold leading-snug text-white">{item.title}</h4>
                        </div>

                        <p
                            className="mt-4 overflow-hidden text-sm leading-relaxed text-gray-100"
                            style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}
                        >
                            {item.description?.[0]}
                        </p>

                        {item.stack && item.stack.length > 0 && (
                            <ul className="mt-4 flex flex-wrap gap-1.5">
                                {item.stack.map(tech => (
                                    <li key={tech} className="rounded-full border border-white/20 px-2.5 py-0.5 text-[11px] text-gray-100">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="mt-5 flex items-center gap-4 text-xs text-white">
                            <span>Clique para ver o projeto</span>
                            <span className="h-px flex-1 bg-green-500/70" />
                            <span>( {String(index + 1).padStart(2, '0')} )</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
