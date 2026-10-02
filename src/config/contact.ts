export const EMAIL = 'sbsboutik@gmail.com'
export const PHONE_DISPLAY = '0590 88 27 27'
export const PHONE_INTL = '+590 590 88 27 27'
export const PHONE_TEL = '+590590882727'
// Numéro WhatsApp au format international, sans "+" ni espaces.
export const WHATSAPP_NUMBER = '590590882727'
export const MAPS_URL = 'https://maps.app.goo.gl/qWAmHhvGx7LjPs647'
// Remplacer par le lien exact de la fiche Google Business (bouton "Partager" de la fiche).
export const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=Sainte-Anne+Bureautique+Services+Guadeloupe'

export const telHref = `tel:${PHONE_TEL}`

export const mailHref = (subject?: string) =>
  `mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`

export const whatsappHref = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const WHATSAPP_ICON =
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.47 9.47zm8.06-17.53A11.33 11.33 0 0 0 12.04.63C5.76.63.65 5.74.65 12.02c0 2.01.52 3.97 1.52 5.7L.55 23.62l6.04-1.58a11.36 11.36 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.19-5.9-3.33-8.05z"/></svg>'

  // Horaires d'ouverture de la boutique (affichés dans le pied de page).
// Un jour sans créneau est affiché « Fermé ».
export const OPENING_HOURS: { days: string; slots: string[] }[] = [
  { days: 'Lundi, mardi, jeudi', slots: ['8h00 – 12h30', '15h00 – 17h00'] },
  { days: 'Mercredi, vendredi', slots: ['8h00 – 12h30'] },
  { days: 'Samedi', slots: ['9h00 – 13h00'] },
  { days: 'Dimanche', slots: [] },
]