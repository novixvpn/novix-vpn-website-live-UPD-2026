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

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-lg bg-blue-50">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-medium text-blue-600">
            {article.category}
          </span>
        </div>
        <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
          <span>{article.date}</span>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{article.readTime} min read</span>
          </div>
        </div>
        <h3 className="mb-3 text-lg font-bold leading-tight text-gray-800">
          <Link href={`/blog/${article.id}`} className="hover:text-blue-600">
            {article.title}
          </Link>
        </h3>
        <div className="mt-4 flex items-center gap-2">
          <Image
            src={article.author.avatar || "/placeholder.svg"}
            alt={article.author.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-xs font-medium">{article.author.name}</span>
        </div>
      </div>
    </article>
  );
}
