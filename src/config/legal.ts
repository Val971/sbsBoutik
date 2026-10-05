// Informations légales affichées sur les pages Mentions légales / Confidentialité (FR et EN).
// Laisser une valeur à null pour afficher « À compléter ».
export const LEGAL = {
  companyName: 'Sainte-Anne Bureautique Services (SBS)',
  legalForm: {
    fr: 'SARL (société à responsabilité limitée) à capital variable',
    en: 'SARL (French limited liability company) with variable capital',
  } as { fr: string; en: string } | null,
  capital: {
    fr: 'Capital variable, minimum 9 146,94 €',
    en: 'Variable capital, minimum €9,146.94',
  } as { fr: string; en: string } | null,
  address: 'Résidence Les Icacs, rue Lethière, 97180 Sainte-Anne, Guadeloupe' as string | null,
  siret: '413 623 836 00017' as string | null,
  rcs: '413 623 836 R.C.S. Pointe-à-Pitre' as string | null,
  vat: 'FR87413623836' as string | null,
  publicationDirector: {
    fr: 'Prevane Novembre et Casimir Eliezer Vanerot, cogérants',
    en: 'Prevane Novembre and Casimir Eliezer Vanerot, co-managers',
  } as { fr: string; en: string } | null,
  host: {
    name: 'Vercel Inc.' as string | null,
    address: '440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis' as string | null,
    addressEn: '440 N Barranca Avenue #4133, Covina, CA 91723, United States',
    // Vercel ne publie pas de numéro de téléphone : seule l'adresse e-mail officielle est indiquée.
    phone: null as string | null,
    email: 'privacy@vercel.com',
    website: 'https://vercel.com',
  },
  lastUpdate: '2026-10-05', // format AAAA-MM-JJ
}
