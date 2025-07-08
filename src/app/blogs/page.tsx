'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Backendless from '@/lib/backendless'

interface BlogPost {
  objectId: string
  title: string
  content: string
  author: string
  created: number
}

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await Backendless.Data.of('Blog').find()
        setBlogs(data)
      } catch (err) {
        console.error('Failed to fetch blogs:', err)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {blogs.map((post) => (
            <div key={post.objectId} className="border p-6 rounded-md shadow-sm bg-white">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-1">
                By {post.author} • {new Date(post.created).toLocaleDateString()}
              </p>
              <p className="line-clamp-3 text-gray-700 mb-3">{post.content}</p>

              <Link href={`/blogs/${post.objectId}`} className="text-blue-600 hover:underline">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
