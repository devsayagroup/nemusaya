import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow private routes if you have them (e.g., admin panels)
      disallow: ['/api/', '/admin/'], 
    },
    sitemap: 'https://www.nemusaya.com/sitemap.xml',
  };
}