import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";

interface Post {
  title: string;
  content: string;
  date: string;
  author: string;
}

async function getPost(slug: string) {
  const res = await fetch(
    `https://wordpress.novixvpn.com/wp-json/custom/v1/post/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Published on {new Date(post.date).toDateString()}
      </p>
      <article
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
      />
    </main>
  );
}
