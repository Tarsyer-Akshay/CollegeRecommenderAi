import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'RankkMate';
const SITE_URL = 'https://rankkmate.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Reusable SEO Head component for per-page meta management.
 *
 * @param {string} title - Page title (appended with " | RankkMate")
 * @param {string} description - Meta description (max 155 chars)
 * @param {string} canonicalPath - Path for canonical URL (e.g. "/colleges/nit-trichy")
 * @param {string} ogImage - Open Graph image URL
 * @param {string} ogType - Open Graph type (default: "website")
 * @param {object|object[]} schemaMarkup - JSON-LD schema object(s) for rich snippets
 * @param {boolean} noIndex - Whether to add noindex meta tag
 */
const SEOHead = ({
    title,
    description,
    canonicalPath = '/',
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    schemaMarkup = null,
    noIndex = false
}) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    // Auto-generate BreadcrumbList for college pages
    const isCollegePage = canonicalPath.startsWith('/colleges/') && canonicalPath !== '/colleges';
    const breadcrumbSchema = isCollegePage ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${SITE_URL}/`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Colleges",
                "item": `${SITE_URL}/colleges`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": title ? title.split('–')[0].split('-')[0].trim() : "College",
                "item": canonicalUrl
            }
        ]
    } : null;

    // Normalize schemas into array — each gets its own <script> tag
    const schemas = [];
    if (schemaMarkup) {
        if (Array.isArray(schemaMarkup)) {
            schemas.push(...schemaMarkup);
        } else {
            schemas.push(schemaMarkup);
        }
    }
    if (breadcrumbSchema) {
        schemas.push(breadcrumbSchema);
    }

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            <link rel="canonical" href={canonicalUrl} />
            <meta name="author" content="RankkMate" />

            {/* Robots */}
            <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@RankkMate" />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Schema Markup — one <script> per schema for reliable Google parsing */}
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEOHead;
