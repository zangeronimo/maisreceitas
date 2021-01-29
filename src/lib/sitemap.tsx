import fs from 'fs';

export async function generateSiteMap(url: string[] = []) {

let sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

for(let i = 0; i < url.length; i++) {
  sitemap = `${sitemap}
  <url>
    <loc>${url[i]}</loc>
  </url>`;
}

sitemap = `${sitemap}</urlset>`;
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
