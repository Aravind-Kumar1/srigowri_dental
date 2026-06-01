import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.srigowridentalcare.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/_next/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
