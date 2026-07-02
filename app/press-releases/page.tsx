import { redirect } from 'next/navigation'

export default function PressReleasesPage() {
  redirect('/news?category=release')
}
