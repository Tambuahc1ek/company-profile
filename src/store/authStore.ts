import { create } from 'zustand'

type User = {
  email: string
}

type AuthStore = {
  user: User | null
  isLoggedIn: boolean
  setUser: (user: User) => void
  logout: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}))

export default useAuthStore
