export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: [ '/anime/', '/api/' ],
      },
      sitemap: 'https://aniblaze.vercel.app/sitemap.xml',
    }
  }