import { redirect } from 'next/navigation'

export default function StatementsPage() {
  redirect('/news?category=speeches')
}
