import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_FRONT_URL;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/*/test'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
