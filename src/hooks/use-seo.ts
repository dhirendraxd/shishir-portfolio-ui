import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
}

export const useSeo = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  author = 'Shishir Joshi'
}: SeoProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to get or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attrName = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attrName}="${name}"]`) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, name);
        document.head.appendChild(tag);
      }
      
      tag.content = content;
    };

    // Update meta tags
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    setMetaTag('author', author);

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    if (ogImage) setMetaTag('og:image', ogImage, true);

    // Twitter tags
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    if (ogImage) setMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    return () => {
      // Cleanup if needed
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, author]);
};
