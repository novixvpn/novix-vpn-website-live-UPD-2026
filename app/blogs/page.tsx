// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Blog | NovixVPN",
  description:
    "Latest articles, guides, and insights about VPN technology and cybersecurity",
};

type Article = {
  ID: number;
  title: string;
  slug: string;
  date: string;
  content: string;
  thumbnail: string;
};

// Featured article data
const featuredArticle = {
  id: "vpn-privacy-power-2025",
  category: "NOVIX VPN EXPERT INSIGHTS",
  title:
    "Privacy is the New Power: How Novix VPN Leads the Next Era of Online Security",
  excerpt:
    "In 2025, as digital surveillance and cyber threats continue to rise, Novix VPN emerges as a game-changer in the privacy tech space. With blazing-fast servers, strict no-logs policies, and a privacy-first architecture, Novix redefines what it means to be truly untraceable online.",
  date: "May 3, 2025",
  readTime: 173,
  author: {
    name: "Novix VPN",
    avatar: "/novix-vpn.webp",
  },
  image: "/blog-page.webp",
};

async function getArticles(): Promise<Article[]> {
  const res = await fetch(
    "https://wordpress.novixvpn.com/wp-json/custom/v1/posts",
    {
      next: { revalidate: 60 }, // ISR
    }
  );

  if (!res.ok) throw new Error("Failed to fetch articles");

  return res.json();
}

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:max-w-6xl">
      {/* Featured Article */}
      <article className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8">
            <div className="mb-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                {featuredArticle.category}
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-800 md:text-4xl">
              {/* <Link */}
              {/* href={`/blogs/${featuredArticle.id}`}
                className="transition-colors hover:text-blue-600"> */}
              {featuredArticle.title}
              {/* </Link> */}
            </h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-blue-500" />
                  <span>{featuredArticle.readTime} min read</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Image
                src={
                  featuredArticle.author.avatar ||
                  "/placeholder.svg?height=32&width=32"
                }
                alt={featuredArticle.author.name}
                width={32}
                height={32}
                className="rounded-full border border-gray-200"
              />
              <span className="text-sm font-medium">
                {featuredArticle.author.name}
              </span>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden bg-gray-100 md:min-h-[400px]">
            <Image
              src={
                featuredArticle.image || "/placeholder.svg?height=400&width=600"
              }
              alt={featuredArticle.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
            <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-coral-500 opacity-80"></div>
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-coral-500 opacity-80"></div>
          </div>
        </div>
      </article>

      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-800 after:ml-4 after:inline-block after:h-1 after:w-24 after:bg-blue-500">
          Recent articles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              href={`/blogs/${article.slug}`}
              key={article.ID}
              className="group block rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              aria-label={`Read article: ${article.title}`}
            >
              <article>
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <span className="inline-block mb-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    INFORMATION
                  </span>

                  <div className="mb-4 flex items-center gap-3 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-blue-500" />
                      <span>5 min read</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
