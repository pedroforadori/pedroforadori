import { useEffect, useRef, useState } from "react"

export function useTypeWriter(lines: string[], charDelay = 120, betweenDelay = 600) {
    const [text, setText] = useState('')
    const mounted = useRef(true)
    const timerRef = useRef<number | null>(null)

    useEffect(() => {
        mounted.current = true

        let lineIndex = 0
        let charIndex = 0
        let accumulated = ''

        const tick = () => {
            if (!mounted.current) return
            const current = lines[lineIndex] ?? ''
            if (charIndex < current.length) {
                accumulated += current.charAt(charIndex)
                charIndex++
                setText(accumulated)
                timerRef.current = window.setTimeout(tick, charDelay)
            } else if (lineIndex < lines.length - 1) {
                // pular para próxima linha
                accumulated += '\n'
                setText(accumulated)
                lineIndex++
                charIndex = 0
                timerRef.current = window.setTimeout(tick, betweenDelay)
            } else {
                timerRef.current = null
            }
        }

        tick()

        return () => {
            mounted.current = false
            if (timerRef.current != null) clearTimeout(timerRef.current)
        }
    }, [lines, charDelay, betweenDelay])

    return text
}