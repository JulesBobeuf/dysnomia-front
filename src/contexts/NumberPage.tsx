import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PageContextType } from '../model/pageContext'

const PageContext = createContext<PageContextType | undefined>(undefined)

export function PageProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const storageKey = `number_page_${pathname}`

  const [pageNumber, setPageNumberState] = useState<string>('1')

  useEffect(() => {
    const stored = localStorage.getItem(storageKey)
    if (stored) {
      setPageNumberState(String(stored))
    }
  }, [storageKey])

  const setPageNumber = (nbPage: string) => {
    localStorage.setItem(storageKey, String(nbPage))
    setPageNumberState(nbPage)
  }

  return (
    <PageContext.Provider value={{ pageNumber, setPageNumber }}>
      {children}
    </PageContext.Provider>
  )
}

export function usePage() {
  const context = useContext(PageContext)
  if (!context) {
    throw new Error('usePage must be used within a PageProvider')
  }
  return context
}
