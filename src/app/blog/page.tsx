import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blogs",
  description: "Monday pro apps",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <div className="p-8">
      <div className="flex flex-col">
        {allBlogs
          .sort((a, b) => {
            const dateA = a.metadata.publishedAt
              ? new Date(a.metadata.publishedAt)
              : new Date(0);
            const dateB = b.metadata.publishedAt
              ? new Date(b.metadata.publishedAt)
              : new Date(0);
            return dateB.getTime() - dateA.getTime(); // Sort in descending order
          })
          .map((post, index) => (
            <div
              className="mb-4 rounded-lg bg-base-200 p-6 shadow-md"
              key={index}
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-bold text-gray-800 hover:text-blue-500">
                  {post.metadata.title}
                </h2>
              </Link>
              <p className="mt-2 text-gray-600">{post.metadata.summary}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {post.metadata.publishedAt}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-blue-500 hover:text-blue-700"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
