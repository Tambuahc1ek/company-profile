import { notFound } from 'next/navigation';
import Backendless from '@/lib/backendless';

interface BlogPost {
  objectId: string;
  title: string;
  content: string;
  author: string;
  created: number;
}

// ✅ TIDAK pakai interface PageProps, langsung destructuring
export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const post = (await Backendless.Data.of('Blog').findById(params.id)) as BlogPost;

    if (!post) return notFound();

    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          By {post.author} • {new Date(post.created).toLocaleDateString()}
        </p>
        <div className="prose max-w-none text-gray-800">
          {post.content || 'No content available'}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog detail:', error);
    return notFound();
  }
}
