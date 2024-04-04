import Link from 'next/link'
import { Logo } from '../logo/logo'
import { Menu } from '../menu/menu'
import styles from './navbar.module.css'
import { Search } from '@/features/search/search'
export function Navbar() {
  return (
    <nav className={styles.container}>
      <Logo />
    </nav>
  )
}
