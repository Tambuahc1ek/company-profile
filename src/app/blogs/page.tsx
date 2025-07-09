import { notFound } from 'next/navigation'
import Backendless from '@/lib/backendless'
import { useEffect, useState } from 'react'

interface BlogPost {
  objectId: string
  title: string
  content: string
  author: string
  created: number
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await Backendless.Data.of('Blog').findById(params.id) as BlogPost
        if (!data) return notFound()
        setPost(data)
      } catch (err) {
        console.error('Error fetching blog detail:', err)
        return notFound()
      }
    }

    fetchBlog()
  }, [params.id])

  if (!post) {
    return <div className="text-center py-10">Loading...</div>
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {post.author} • {new Date(post.created).toLocaleDateString()}
      </p>
      <div className="prose max-w-none text-gray-800">
        {post.content}
      </div>
    </div>
  )
}
