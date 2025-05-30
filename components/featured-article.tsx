import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

interface Author {
  name: string;
  avatar: string;
}

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  author: Author;
  image: string;
}

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <article className="overflow-hidden rounded-lg bg-white">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center p-6">
          <div className="mb-2">
            <span className="text-sm font-medium text-blue-600">
              {article.category}
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-800 md:text-4xl">
            <Link href={`/blog/${article.id}`} className="hover:text-blue-600">
              {article.title}
            </Link>
          </h2>
          <p className="mb-6 text-gray-600">{article.excerpt}</p>
          <div className="mt-auto flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{article.date}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={article.author.avatar || "/placeholder.svg"}
              alt={article.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-medium">{article.author.name}</span>
          </div>
        </div>
        <div className="relative min-h-[300px] overflow-hidden bg-gray-100 md:min-h-[400px]">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-coral-500"></div>
          <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-coral-500"></div>
        </div>
      </div>
    </article>
  );
}
