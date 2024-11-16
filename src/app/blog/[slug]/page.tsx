import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/lib/blog";
import { formatDate, getURL } from "@/lib/helpers";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const baseUrl = getURL();
  let ogImage = image ? `${baseUrl}${image}` : `${baseUrl}og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: "index, follow",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    referrer: "origin-when-cross-origin",
    keywords: post.metadata.keywords,
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  const baseUrl = getURL();

  return (
    <div className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
      <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
        <section>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                datePublished: post.metadata.publishedAt,
                dateModified: post.metadata.publishedAt,
                description: post.metadata.summary,
                image: post.metadata.image
                  ? `${baseUrl}${post.metadata.image}`
                  : `${baseUrl}og?title=${post.metadata.title}`,
                url: `${baseUrl}blog/${post.slug}`,
                author: {
                  "@type": "Article",
                  name: "monday automation",
                },
              }),
            }}
          />
          <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">
            {post.metadata.title}
          </h1>
          <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt as string)}
            </p>
          </div>
          <article className="prose prose-neutral prose-quoteless dark:prose-invert">
            <CustomMDX source={post.content} />
          </article>
        </section>
      </main>
    </div>
  );
}
