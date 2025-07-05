const BASE_URL = import.meta.env.VITE_BASE_PATH_API

export async function registerUser(data: {
    username: string
    password: string
    confirmationPassword: string
  }) {
    const res = await fetch(`${BASE_URL}/api/Users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain'
      },
      body: JSON.stringify(data)
    })
    const contentType = res.headers.get('content-type')

    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.message || 'Registration failed')
    }
  
    return contentType?.includes('application/json') ? res.json() : res.text()
  }
  

export async function loginUser(data: {
    username: string
    password: string
  }) {
    const res = await fetch(`${BASE_URL}/api/Users/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain'
      },
      body: JSON.stringify(data)
    })
  
    const contentType = res.headers.get('content-type')
  
    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.message || 'Login failed')
    }
  
    return contentType?.includes('application/json') ? res.json() : res.text()
  }
  