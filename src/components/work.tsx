import { motion, useMotionValue, useScroll } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import workItem from '../data/work-item'
import BackgroundLoop from './backgroundLoop'
import Marquee from './marquee'
import ProjectPreview, { ProjectItem, useCanHover } from './projectPreview'

const VISIBLE_PROJECTS = 5

// um logo por cliente, sem repetir
const clientLogos = workItem.filter((item, i, all) => all.findIndex(other => other.logo === item.logo) === i)

export default function Work() {
    const { scrollYProgress } = useScroll()
    const canHover = useCanHover()
    const [preview, setPreview] = useState<{ item: ProjectItem; index: number } | null>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const clientsRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    const [expanded, setExpanded] = useState(false)
    const hiddenCount = workItem.length - VISIBLE_PROJECTS

    function collapse() {
        setExpanded(false)
        setPreview(null)
        listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <section className="w-full overflow-hidden py-24 max-sm:py-16">
            <BackgroundLoop src="/assets/bg-coffee.gif" startRef={clientsRef} />

            <motion.div
                className="fixed top-0 left-0 right-0 h-[10px] bg-green-500 origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            <Marquee text="Projetos" />

            <div className="mx-auto mt-16 max-w-3xl px-6 text-center" data-aos="fade-up" data-aos-duration="1000">
                <p className="text-sm font-semibold text-green-500">
                    Projetos e empresas onde atuei como consultor
                </p>
                <h2 className="mt-3 text-4xl font-bold leading-tight text-white max-sm:text-2xl">
                    Ao longo dos anos, trabalhei com pessoas e empresas incríveis em projetos desafiadores
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-300">
                    Devido à natureza de alguns clientes, não posso revelar todos os aspectos dos projetos.
                    Ainda assim, aqui estão as empresas com as quais tive o prazer de trabalhar.
                </p>
            </div>

            <div ref={clientsRef} className="mx-auto mt-14 grid max-w-5xl grid-cols-6 gap-2 px-6 max-lg:grid-cols-4 max-sm:grid-cols-3">
                {clientLogos.map(item => (
                    <div
                        key={item.logo}
                        className="flex h-24 items-center justify-center rounded-md bg-white p-4 max-sm:h-20"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={item.logo}
                            alt={item.title}
                            className="max-h-full max-w-full object-contain grayscale transition hover:grayscale-0"
                        />
                    </div>
                ))}
            </div>

            <div ref={listRef} className="mx-auto mt-24 max-w-3xl scroll-mt-28 px-6">
                <ol
                    onMouseMove={e => {
                        mouseX.set(e.clientX)
                        mouseY.set(e.clientY)
                    }}
                    onMouseLeave={() => setPreview(null)}
                >
                    {workItem.slice(0, expanded ? workItem.length : VISIBLE_PROJECTS).map((item, i) => (
                        <motion.li
                            key={item.id}
                            className="border-b border-white/[0.15]"
                            {...(i < VISIBLE_PROJECTS
                                ? { 'data-aos': 'fade-up', 'data-aos-duration': '800' }
                                : {
                                    initial: { opacity: 0, y: 24 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { duration: 0.5, delay: (i - VISIBLE_PROJECTS) * 0.06 },
                                })}
                        >
                            <ProjectRow item={item} index={i} onHover={() => canHover && setPreview({ item, index: i })} />
                        </motion.li>
                    ))}
                </ol>

                {hiddenCount > 0 && !expanded && (
                    <div className="relative">
                        {/* próximo projeto aparece apagado atrás do botão */}
                        <div aria-hidden className="pointer-events-none select-none border-b border-white/[0.15] opacity-[0.12]">
                            <ProjectRow item={workItem[VISIBLE_PROJECTS]} index={VISIBLE_PROJECTS} onHover={() => {}} hidden />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                type="button"
                                onClick={() => setExpanded(true)}
                                className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-green-500 transition-colors hover:text-green-300"
                            >
                                <span className="h-px w-10 bg-current" />
                                Mostrar mais
                                <span className="h-px w-10 bg-current" />
                            </button>
                        </div>
                    </div>
                )}

                {expanded && (
                    <div className="mt-10 flex justify-center">
                        <button
                            type="button"
                            onClick={collapse}
                            className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-green-500"
                        >
                            <span className="h-px w-10 bg-current" />
                            Mostrar menos
                            <span className="h-px w-10 bg-current" />
                        </button>
                    </div>
                )}
            </div>

            <ProjectPreview item={preview?.item ?? null} index={preview?.index ?? 0} mouseX={mouseX} mouseY={mouseY} />
        </section>
    )
}

function ProjectRow({ item, index, onHover, hidden = false }: { item: ProjectItem; index: number; onHover: () => void; hidden?: boolean }) {
    return (
        <Link
            href={`/job-detail/${item.id}`}
            onMouseEnter={onHover}
            tabIndex={hidden ? -1 : undefined}
            className="group flex items-center gap-6 py-6 transition-colors max-sm:gap-3 max-sm:py-5"
        >
            <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-green-500 max-sm:text-base">
                    {item.title}
                </h3>
                <p className="mt-1 truncate text-xs uppercase tracking-wider text-gray-300">
                    {item.stack?.join(' · ')}
                </p>
            </div>
            <ArrowUpRight
                size={24}
                className="shrink-0 -translate-x-2 text-green-500 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
            />
            <span className="shrink-0 text-xs text-white">
                ( {String(index + 1).padStart(2, '0')} )
            </span>
        </Link>
    )
}
