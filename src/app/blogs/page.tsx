import Link from 'next/link'
import Backendless from '@/lib/backendless'

interface BlogPost {
  objectId: string
  title: string
  author: string
  created: number
}

export default async function BlogListPage() {
  const posts = await Backendless.Data.of('Blog').find() as BlogPost[]

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.objectId} className="border-b pb-2">
            <Link href={`/blogs/${post.objectId}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm">
              {post.author} — {new Date(post.created).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
