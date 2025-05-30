import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const res = await fetch(`https://wordpress.novixvpn.com/wp-json/custom/v1/post/${params.slug}`);
  if (!res.ok) return {};

  const post = await res.json();

  return {
    title: post.title,
    description: post.excerpt.replace(/(<([^>]+)>)/gi, "").slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.excerpt.replace(/(<([^>]+)>)/gi, "").slice(0, 200),
      type: 'article',
      publishedTime: post.date,
      url: `https://novixvpn.com/blog/${post.slug}`,
      images: [
        {
          url: post.featured_image || 'https://wordpress.novixvpn.com/default-og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt.replace(/(<([^>]+)>)/gi, "").slice(0, 200),
      images: [post.featured_image || 'https://wordpress.novixvpn.com/default-og-image.jpg'],
    },
  };
}
