/**
 * Prefix a /public asset path with the deploy base path.
 * Needed because next/image does not prepend basePath for unoptimized images
 * on GitHub Pages project sites. Resolves to a plain path on the custom domain.
 */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
