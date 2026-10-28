export type Locale = 'en' | 'ru'

export function localeFromPath(pathname: string): Locale {
  return pathname === '/ru' || pathname.startsWith('/ru/') ? 'ru' : 'en'
}

export function pageFromPath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '') || '/'
  const rest =
    trimmed === '/ru' || trimmed.startsWith('/ru/') ? trimmed.slice(3) : trimmed
  return rest.replace(/^\//, '')
}

export function pathFor(locale: Locale, page = ''): string {
  const clean = page.replace(/^\/+|\/+$/g, '')
  if (locale === 'ru') return clean ? `/ru/${clean}` : '/ru/'
  return clean ? `/${clean}` : '/'
}
