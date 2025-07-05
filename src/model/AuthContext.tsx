import { User } from "./user"

export type AuthContextType = {
  token: string | null
  user: User | null
  login: (token: string) => void
  logout: () => void
}