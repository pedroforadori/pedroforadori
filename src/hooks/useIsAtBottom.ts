import { useEffect, useState } from "react"

export default function useIsAtBottom(threshold = 10) {
    const [isAtBottom, setIsAtBottom] = useState(false)

    useEffect(() => {
        const check = () => {
            const scrollY = window.scrollY || window.pageYOffset
            setIsAtBottom(window.innerHeight + scrollY >= (document.documentElement.scrollHeight - threshold))
        }
        check()
        window.addEventListener('scroll', check)
        window.addEventListener('resize', check)
        return () => {
            window.removeEventListener('scroll', check)
            window.removeEventListener('resize', check)
        }
    }, [threshold])

    return isAtBottom
}