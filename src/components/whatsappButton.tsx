import { WhatsappLogo } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../data/contact'

const GREEN_SECTION_ID = 'contact-section'
const BUTTON_PROBE_OFFSET = 52 // altura aproximada do centro do botão a partir da base da tela

// Botão flutuante do WhatsApp, presente no site todo
export default function WhatsappButton() {
    const [onGreen, setOnGreen] = useState(false)

    // sobre a seção verde de contato o botão escurece para não sumir
    useEffect(() => {
        const onScroll = () => {
            const probeY = window.innerHeight - BUTTON_PROBE_OFFSET
            const contact = document.getElementById(GREEN_SECTION_ID)?.getBoundingClientRect()
            setOnGreen(!!contact && contact.top <= probeY && contact.bottom >= probeY)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Fale comigo no WhatsApp"
            className="group fixed bottom-6 right-6 z-40 flex items-center max-sm:bottom-5 max-sm:right-5"
        >
            <span className="pointer-events-none mr-3 whitespace-nowrap rounded-full bg-ink-800/95 px-4 py-2 text-sm text-white opacity-0 shadow-lg backdrop-blur transition duration-300 group-hover:opacity-100 max-sm:hidden">
                Fale comigo no WhatsApp
            </span>
            <span
                className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-colors duration-300 group-hover:scale-105 ${onGreen
                    ? 'bg-ink-900 text-green-500'
                    : 'bg-green-500 text-ink-900'}`}
            >
                {/* pulso discreto para chamar atenção */}
                <span className={`absolute inset-0 animate-ping rounded-full opacity-20 [animation-duration:2.5s] motion-reduce:hidden ${onGreen ? 'bg-ink-900' : 'bg-green-500'}`} />
                <WhatsappLogo size={30} weight="fill" className="relative" />
            </span>
        </a>
    )
}
