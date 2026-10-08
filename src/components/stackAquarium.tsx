import { useEffect, useRef, useState } from 'react'
import stackFront from '../data/stack-front'
import stackMobile from '../data/stack-mobile'
import stackBack from '../data/stack-back'

const STACKS = [...stackFront, ...stackMobile, ...stackBack]

// Comportamento dos "peixes"
const BASE_SPEED = { min: 28, max: 55 } // px/s nadando tranquilo
const MAX_SPEED = 520 // px/s fugindo do mouse
const WANDER = 1.4 // quanto a direção desejada varia por segundo
// distâncias para desktop e para telas estreitas (celular)
const LAYOUT = {
    wide: { wall: 50, gap: 26, flee: 190 },
    compact: { wall: 18, gap: 14, flee: 120 },
}
const FLEE_FORCE = 2600
// "Reduzir Movimento" ativo no sistema: continua nadando, só que bem mais calmo
const CALM = { speed: 0.35, maxSpeed: 160, flee: 0.4 }

type Fish = {
    x: number
    y: number
    vx: number
    vy: number
    w: number
    h: number
    heading: number
    speed: number
    el: HTMLDivElement
}

const random = (min: number, max: number) => min + Math.random() * (max - min)

function useReducedMotion() {
    const [reduced, setReduced] = useState(false)
    useEffect(() => {
        const query = window.matchMedia('(prefers-reduced-motion: reduce)')
        setReduced(query.matches)
        const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
        query.addEventListener('change', onChange)
        return () => query.removeEventListener('change', onChange)
    }, [])
    return reduced
}

export default function StackAquarium() {
    const tankRef = useRef<HTMLDivElement>(null)
    const fishRefs = useRef<(HTMLDivElement | null)[]>([])
    const reducedMotion = useReducedMotion()

    useEffect(() => {
        const tank = tankRef.current
        if (!tank) return
        const calm = reducedMotion

        let width = tank.clientWidth
        let height = tank.clientHeight
        let layout = LAYOUT.wide
        // tela em pé: os cards preferem nadar na vertical, senão vivem batendo nas laterais
        let portrait = false
        const tune = () => {
            layout = width < 640 ? LAYOUT.compact : LAYOUT.wide
            portrait = height > width
        }
        tune()
        const pointer = { x: 0, y: 0, active: false }

        // posição inicial em grade com variação, para ninguém nascer sobreposto
        const elements = fishRefs.current.filter((el): el is HTMLDivElement => !!el)
        const cols = Math.max(1, Math.floor(width / (width < 640 ? 150 : 190)))
        const rows = Math.ceil(elements.length / cols)
        const school: Fish[] = elements.map((el, i) => {
            const w = el.offsetWidth, h = el.offsetHeight
            const cellW = width / cols, cellH = height / rows
            const col = i % cols, row = Math.floor(i / cols)
            const base = portrait ? Math.PI / 2 : 0
            const heading = base + (Math.random() < 0.5 ? 0 : Math.PI) + random(-0.4, 0.4)
            const speed = random(BASE_SPEED.min, BASE_SPEED.max) * (calm ? CALM.speed : 1)
            return {
                x: col * cellW + (cellW - w) / 2 + random(-10, 10),
                y: row * cellH + (cellH - h) / 2 + random(-8, 8),
                vx: Math.cos(heading) * speed,
                vy: Math.sin(heading) * speed,
                w, h, heading, speed, el,
            }
        })

        let frame = 0
        let last = performance.now()
        let running = false

        const step = (now: number) => {
            const dt = Math.min((now - last) / 1000, 0.05)
            last = now

            const { wall, gap, flee } = layout
            const [swimX, swimY] = portrait ? [14, 30] : [30, 14]

            for (const f of school) {
                let ax = 0, ay = 0

                // nado livre: a direção desejada muda devagar, preferindo a horizontal
                f.heading += random(-WANDER, WANDER) * dt * (calm ? 0.5 : 1)
                ax += Math.cos(f.heading) * swimX
                ay += Math.sin(f.heading) * swimY

                // paredes do aquário: empurra de volta e vira a direção desejada
                if (f.x < wall) {
                    ax += (wall - f.x) * 6
                    if (!portrait) f.heading = random(-0.5, 0.5)
                }
                if (f.x + f.w > width - wall) {
                    ax -= (f.x + f.w - width + wall) * 6
                    if (!portrait) f.heading = Math.PI + random(-0.5, 0.5)
                }
                if (f.y < wall) {
                    ay += (wall - f.y) * 6
                    if (portrait) f.heading = Math.PI / 2 + random(-0.5, 0.5)
                }
                if (f.y + f.h > height - wall) {
                    ay -= (f.y + f.h - height + wall) * 6
                    if (portrait) f.heading = -Math.PI / 2 + random(-0.5, 0.5)
                }

                // mouse por perto: foge
                if (pointer.active) {
                    const dx = f.x + f.w / 2 - pointer.x, dy = f.y + f.h / 2 - pointer.y
                    const dist = Math.hypot(dx, dy) || 1
                    if (dist < flee) {
                        const force = (1 - dist / flee) * FLEE_FORCE * (calm ? CALM.flee : 1)
                        ax += (dx / dist) * force
                        ay += (dy / dist) * force
                        f.heading = Math.atan2(dy, dx)
                    }
                }

                f.vx += ax * dt
                f.vy += ay * dt

                // volta aos poucos para a velocidade de cruzeiro
                const speed = Math.hypot(f.vx, f.vy) || 1
                const target = Math.min(speed, calm ? CALM.maxSpeed : MAX_SPEED)
                const eased = target + (f.speed - target) * Math.min(1, dt * 1.6)
                f.vx = (f.vx / speed) * eased
                f.vy = (f.vy / speed) * eased
            }

            // separação: quem chega perto desvia, e sobreposição é desfeita na hora
            for (let i = 0; i < school.length; i++) {
                for (let j = i + 1; j < school.length; j++) {
                    const a = school[i], b = school[j]
                    const dx = b.x + b.w / 2 - (a.x + a.w / 2)
                    const dy = b.y + b.h / 2 - (a.y + a.h / 2)
                    const overlapX = (a.w + b.w) / 2 + gap - Math.abs(dx)
                    const overlapY = (a.h + b.h) / 2 + gap - Math.abs(dy)
                    if (overlapX <= 0 || overlapY <= 0) continue

                    if (overlapX < overlapY) {
                        const push = (overlapX / 2) * Math.sign(dx || 1)
                        a.x -= push; b.x += push
                        a.vx -= push * 2; b.vx += push * 2
                    } else {
                        const push = (overlapY / 2) * Math.sign(dy || 1)
                        a.y -= push; b.y += push
                        a.vy -= push * 2; b.vy += push * 2
                    }
                }
            }

            for (const f of school) {
                f.x += f.vx * dt
                f.y += f.vy * dt

                // nunca sai do vidro
                if (f.x < 0) { f.x = 0; f.vx = Math.abs(f.vx) }
                if (f.y < 0) { f.y = 0; f.vy = Math.abs(f.vy) }
                if (f.x + f.w > width) { f.x = width - f.w; f.vx = -Math.abs(f.vx) }
                if (f.y + f.h > height) { f.y = height - f.h; f.vy = -Math.abs(f.vy) }

                const tilt = calm ? 0 : Math.max(-8, Math.min(8, (Math.atan2(f.vy, Math.abs(f.vx)) * 180) / Math.PI))
                f.el.style.transform = `translate3d(${f.x}px, ${f.y}px, 0) rotate(${tilt}deg)`
            }

            frame = requestAnimationFrame(step)
        }

        const start = () => {
            if (running) return
            running = true
            last = performance.now()
            frame = requestAnimationFrame(step)
        }
        const stop = () => {
            running = false
            cancelAnimationFrame(frame)
        }

        // só anima quando o aquário está visível
        const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
        observer.observe(tank)

        const onPointerMove = (e: PointerEvent) => {
            const rect = tank.getBoundingClientRect()
            pointer.x = e.clientX - rect.left
            pointer.y = e.clientY - rect.top
            pointer.active = true
        }
        const onPointerLeave = () => { pointer.active = false }
        const onResize = () => {
            width = tank.clientWidth
            height = tank.clientHeight
            tune()
        }
        tank.addEventListener('pointermove', onPointerMove)
        tank.addEventListener('pointerdown', onPointerMove)
        tank.addEventListener('pointerleave', onPointerLeave)
        tank.addEventListener('pointerup', onPointerLeave)
        window.addEventListener('resize', onResize)

        return () => {
            stop()
            observer.disconnect()
            tank.removeEventListener('pointermove', onPointerMove)
            tank.removeEventListener('pointerdown', onPointerMove)
            tank.removeEventListener('pointerleave', onPointerLeave)
            tank.removeEventListener('pointerup', onPointerLeave)
            window.removeEventListener('resize', onResize)
        }
    }, [reducedMotion])

    return (
        <div className="mb-32 w-full max-sm:mb-16">
            <div ref={tankRef} className="relative h-[70vh] min-h-[460px] w-full touch-pan-y overflow-hidden max-sm:h-[85vh]">
                <ul>
                    {STACKS.map((item, i) => (
                        <li key={`${item.title}-${i}`}>
                            <div
                                ref={el => { fishRefs.current[i] = el }}
                                className={`absolute left-0 top-0 will-change-transform
                                flex select-none items-center gap-2 whitespace-nowrap rounded-full border border-white/[0.15]
                                bg-ink-800/90 py-2 pl-2 pr-4 text-sm text-white shadow-lg backdrop-blur max-sm:gap-1.5 max-sm:py-1.5 max-sm:pl-1.5 max-sm:pr-3 max-sm:text-xs`}
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1 max-sm:h-5 max-sm:w-5 max-sm:p-0.5">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.logo} alt="" className="max-h-full max-w-full object-contain" draggable={false} />
                                </span>
                                {item.title}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
