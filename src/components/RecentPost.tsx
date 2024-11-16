import Link from "next/link";

const RecentPosts = ({ posts }: { posts: any }) => {
  return (
    <div className="mx-2 mt-8 bg-base-200 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li
            key={post.slug}
            className="border-b border-black pb-4 last:border-b-0 last:pb-0"
          >
            <Link href={`/blog/${post.slug}`} className="block group">
              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/blog"
        className="inline-block mt-6 text-blue-600 hover:text-blue-800 transition-colors"
      >
        View all posts →
      </Link>
    </div>
  );
};

export default RecentPosts;
