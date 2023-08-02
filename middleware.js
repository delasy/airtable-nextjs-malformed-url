import Airtable from 'airtable'

Airtable.configure({ apiKey: 'XXX' })

export function middleware (_) {
}

export const config = {
  matcher: '/',
}
