'use client'

import Link from 'next/link'
import LogoutButton from './LogoutButton'
import useAuthStore from '@/store/authStore'

export default function Navbar() {
  const { isLoggedIn } = useAuthStore()

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-black">
          PACIFICA
        </Link>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><Link href="/about" className="text-black transition">About</Link></li>
          <li><Link href="/products" className="text-black transition">Products</Link></li>
          <li><Link href="/teams" className="text-black transition">Teams</Link></li>
          <li><Link href="/blogs" className="text-black transition">Blogs</Link></li>
          <li><Link href="/create-blog" className="text-black transition">Create</Link></li>
          {isLoggedIn ? (
            <li><LogoutButton /></li>
          ) : (
            <>
              <li><Link href="/login" className="text-black transition">Login</Link></li>
              <li><Link href="/register" className="text-black transition">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
