import { redirect } from 'next/navigation'

export default function MeetingsPage() {
  redirect('/news?category=meetings')
}
