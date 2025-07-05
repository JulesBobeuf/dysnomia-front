import { createContext, useContext, useEffect, useState } from 'react'
const BASE_URL = import.meta.env.VITE_BASE_PATH_API
import { AuthContextType } from '../model/AuthContext'
import { User } from '../model/user'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('auth_token')
    if (stored) {
      setToken(stored)
    }
  }, [])

  useEffect(() => {
    if (!token) return

    const fetchUser = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/Users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!res.ok) throw new Error('Invalid token')

        const data = await res.json()
        setUser(data)
      } catch {
        logout()
      }
    }

    fetchUser()

    const renewInterval = setTimeout(() => {
      renewToken()
    }, 60 * 60 * 1000) // 1 hour

    return () => clearTimeout(renewInterval)
  }, [token])

  const login = (newToken: string) => {
    localStorage.setItem('auth_token', newToken)
    setToken(newToken)
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    setToken(null)
    setUser(null)
  }

  const renewToken = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/Users/renew`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) throw new Error()

      const newToken = await res.text()
      login(newToken)
    } catch {
      logout()
    }
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
