import { redirect } from 'next/navigation'

export default function PressConferencesPage() {
  redirect('/news?category=conference')
}
