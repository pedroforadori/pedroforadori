// Faixa de texto gigante e fino que desliza na horizontal, separado por traços
export default function Marquee({ text }: { text: string }) {
    const items = Array.from({ length: 6 })

    return (
        <div className="pointer-events-none select-none overflow-hidden" aria-hidden>
            <div className="marquee-track flex w-max">
                {[0, 1].map(copy => (
                    <div key={copy} className="flex shrink-0 items-center">
                        {items.map((_, i) => (
                            <span key={i} className="flex items-center whitespace-nowrap text-[9rem] font-extralight uppercase leading-none text-white/10 max-sm:text-6xl">
                                <span className="mx-10 inline-block h-px w-24 bg-white/20 max-sm:mx-5 max-sm:w-12" />
                                {text}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
