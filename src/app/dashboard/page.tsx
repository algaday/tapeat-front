'use client'
import { useLogoutMutation, userApi } from '@/entities/user/api/userApi'
import { clearUser } from '@/entities/user/model/slice'
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const [logout] = useLogoutMutation()
  const handleLogout = async () => {
    await logout()
    dispatch(clearUser())
  }
  return (
    <main>
      <button onClick={handleLogout}>logout</button>
    </main>
  )
}
