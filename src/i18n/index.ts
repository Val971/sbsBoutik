export type Lang = 'fr' | 'en'

export const LANGS: Lang[] = ['fr', 'en']

export const getLang = (locale: string | undefined): Lang => (locale === 'en' ? 'en' : 'fr')

export const pick = <T>(lang: Lang, dict: Record<Lang, T>): T => dict[lang]

// Equivalent URLs for each page, per language.
export const PAGES = {
  home: { fr: '/', en: '/en/' },
  legal: { fr: '/mentions-legales', en: '/en/legal-notice' },
  privacy: { fr: '/confidentialite', en: '/en/privacy' },
} as const

export type PageKey = keyof typeof PAGES

// Link to a section of the home page in the given language, e.g. home('en', 'services') → "/en/#services".
export const home = (lang: Lang, anchor?: string) => `${PAGES.home[lang]}${anchor ? `#${anchor}` : ''}`

export const pageKeyFromPath = (pathname: string): PageKey => {
  const clean = pathname.replace(/\/+$/, '') || '/'
  for (const [key, urls] of Object.entries(PAGES) as [PageKey, Record<Lang, string>][]) {
    if (Object.values(urls).some((u) => (u.replace(/\/+$/, '') || '/') === clean)) return key
  }
  return 'home'
}
