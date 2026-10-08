// Visual de card compartilhado entre a prévia de projetos e os serviços
export const INFO_CARD_CLASS = 'rounded-2xl border border-white/[0.15] bg-ink-800/95 p-6 backdrop-blur'

interface InfoCardContentProps {
    logo?: string
    title?: string
    description?: string
    tags?: string[]
    footerLabel: string
    index: number
    // logos de clientes ficam num quadrado branco; ícones transparentes podem dispensar
    logoBackground?: boolean
}

export default function InfoCardContent({ logo, title, description, tags, footerLabel, index, logoBackground = true }: InfoCardContentProps) {
    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-md ${logoBackground ? 'bg-white p-2' : ''}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt="" className="max-h-full max-w-full object-contain" />
                </div>
                <h4 className="text-base font-bold leading-snug text-white">{title}</h4>
            </div>

            <p
                className="mt-4 overflow-hidden text-sm leading-relaxed text-gray-100"
                style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}
            >
                {description}
            </p>

            {tags && tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                        <li key={tag} className="rounded-full border border-white/20 px-2.5 py-0.5 text-[11px] text-gray-100">
                            {tag}
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-white">
                <span>{footerLabel}</span>
                <span className="h-px flex-1 bg-green-500/70" />
                <span>( {String(index + 1).padStart(2, '0')} )</span>
            </div>
        </div>
    )
}
