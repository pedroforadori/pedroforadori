import { RefObject, useEffect, useState } from 'react'

interface BackgroundLoopProps {
    src: string
    // o fundo aparece quando o topo deste elemento entra na tela, e fica até o fim da página
    startRef: RefObject<HTMLElement>
}

// Animação fixa atrás do conteúdo, bem apagada; a página rola por cima dela
export default function BackgroundLoop({ src, startRef }: BackgroundLoopProps) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const update = () => {
            const el = startRef.current
            if (!el) return
            setVisible(el.getBoundingClientRect().top < window.innerHeight * 0.85)
        }
        update()
        window.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', update)
        return () => {
            window.removeEventListener('scroll', update)
            window.removeEventListener('resize', update)
        }
    }, [startRef])

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center grayscale blur-[2px] transition-opacity duration-1000 motion-reduce:hidden"
            style={{ backgroundImage: `url(${src})`, opacity: visible ? 0.1 : 0 }}
        />
    )
}
