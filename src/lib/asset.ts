/** Prefix a root-absolute public path with Vite's base (needed on GitHub Pages). */
export function asset(path: string): string {
  if (!path.startsWith('/')) return path
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.slice(1)}`
}
