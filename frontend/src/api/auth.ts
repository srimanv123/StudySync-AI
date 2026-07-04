import axios from 'axios'

interface LoginResponse {
  success: boolean
  message: string
  token: string
  user: {
    id: string
    name: string
    email: string
  }
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  const response = await axios.post<LoginResponse>(`${apiBaseUrl}/api/auth/login`, {
    email,
    password,
  })

  return response.data
}
