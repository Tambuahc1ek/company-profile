'use client'

import { useState } from 'react'
import Backendless from '@/lib/backendless'
import { useRouter } from 'next/navigation'

export default function CreateBlogPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const blogPost = {
      title,
      author,
      content,
      created: Date.now(),
    }

    try {
      await Backendless.Data.of('blog').save(blogPost)
      router.push('/blogs')
    } catch (error) {
      console.error('Failed to create blog post:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Create New Blog</h1>

        <div className="mb-4">
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Author</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-1">Content</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 min-h-[150px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
