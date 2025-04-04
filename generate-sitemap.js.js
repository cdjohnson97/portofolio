// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://chancedarlon.netlify.app' });

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more routes here if needed
];

streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap generated!'))
  .catch(console.error);

sitemap.pipe(createWriteStream('./public/sitemap.xml'));

links.forEach(link => sitemap.write(link));
sitemap.end();
