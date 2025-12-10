import { useEffect, useRef, useState } from 'react'

type Props = {
  videoSrc?: string
  poster?: string
  mobileImage: string
  className?: string
}

export default function BackgroundMedia({
  videoSrc,
  poster,
  mobileImage,
  className = '',
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    // Executa só no client (evita mismatch SSR)
    const detectMobile = (): boolean => {
      const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
      const smallScreen = typeof window !== 'undefined' && window.innerWidth <= 768
      const coarsePointer =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(pointer: coarse)').matches
      const uaMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(ua)
      return uaMobile || coarsePointer || smallScreen
    }

    setIsMobile(detectMobile())
    const onResize = () => setIsMobile(detectMobile())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const v = videoRef.current
    if (!v) return

    // Garantias para autoplay em desktop
    v.muted = true
    v.playsInline = true
    v.setAttribute('webkit-playsinline', 'true')

    // tentativa de autoplay (não bloqueia caso falhe)
    v.play().catch(() => {
      /* fallback: fica paused, mas componente funciona */
    })
  }, [isMobile, videoSrc])

  // enquanto detecta no client, não renderiza nada (evita SSR mismatch)
  if (isMobile === null) return null

  if (isMobile) {
    return (
      <img
        src={mobileImage}
        alt="fundo"
        className={`fixed inset-0 w-full h-full object-cover z-0 pointer-events-none ${className}`}
      />
    )
  }

  return (
    <>
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          className={`fixed inset-0 w-full h-full object-cover z-0 pointer-events-none ${className}`}
        />
      ) : (
        // fallback quando não há vídeo definido
        <img
          src={poster || mobileImage}
          alt="fundo"
          className={`fixed inset-0 w-full h-full object-cover z-0 pointer-events-none ${className}`}
        />
      )}
    </>
  )
}