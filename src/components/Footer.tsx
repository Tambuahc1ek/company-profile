'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-gray-100 py-6 mt-10 border-t">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-500 px-6">
        &copy; {year ?? '...'} Pacifica. All rights reserved.
      </div>
    </footer>
  )
}
