import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nemusaya.com';

  // Define all your public routes here
  const routes = [
    '',
    '/our-story',
    '/services',
    '/contact',
    '/book',
    '/villa/nemu-rasa',
    '/villa/nemu-jiwa',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.includes('/villa/') ? 0.9 : 0.8,
  }));
}