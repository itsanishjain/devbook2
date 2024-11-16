import { getURL } from "@/lib/helpers";

export default function robots() {
  const baseUrl = getURL();
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}sitemap.xml`,
    host: baseUrl,
  };
}
