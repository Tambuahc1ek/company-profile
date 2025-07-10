import Backendless from '@/lib/backendless';
import { notFound } from 'next/navigation';

interface BlogPost {
  objectId: string;
  title: string;
  content: string;
  author: string;
  created: number;
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;

  const post = (await Backendless.Data.of('Blog').findById(id)) as BlogPost;

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">
        {post.author} — {new Date(post.created).toLocaleDateString()}
      </p>
      <div className="prose max-w-none text-gray-800">
        {post.content || 'No content available'}
      </div>
    </div>
  );
}
