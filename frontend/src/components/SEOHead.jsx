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
 * @param {string} canonicalPath - Path for canonical URL (e.g. "/jee-advanced")
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

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots */}
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Schema Markup */}
            {schemaMarkup && (
                <script type="application/ld+json">
                    {JSON.stringify(
                        Array.isArray(schemaMarkup) ? schemaMarkup : schemaMarkup
                    )}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
