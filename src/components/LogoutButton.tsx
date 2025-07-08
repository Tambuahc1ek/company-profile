'use client'

import Backendless from '@/lib/backendless'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await Backendless.UserService.logout()
      router.push('/login')
    } catch (err: any) {
      console.error('Logout failed', err.message)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-red-600 hover:underline"
    >
      Logout
    </button>
  )
}
