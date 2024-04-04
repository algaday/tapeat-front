'use client'
import { useLogoutMutation, userApi } from '@/entities/user/api/userApi'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [logout] = useLogoutMutation()
  const handleLogout = async () => {
    await logout()
    router.refresh()
  }
  return (
    <main>
      <button onClick={handleLogout}>logout</button>
    </main>
  )
}
