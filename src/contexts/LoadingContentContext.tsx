import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface LoadingContentContextType {
  isLoading: boolean
}

const LoadingContentContext = createContext<LoadingContentContextType | undefined>(undefined)

export function LoadingContentProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false)
    }

    window.addEventListener('load', handleLoad)
    const timeout = setTimeout(() => setIsLoading(false), 3000)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <LoadingContentContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContentContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContentContext)
  if (context === undefined) {
    throw new Error('useLoading deve ser usado dentro de LoadingProvider')
  }
  return context
}