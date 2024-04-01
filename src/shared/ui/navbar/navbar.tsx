import { Logo } from '../logo/logo'
import { Menu } from '../menu/menu'
import styles from './navbar.module.css'
export function Navbar() {
  return (
    <nav className={styles.container}>
      <Logo />
      <Menu />
    </nav>
  )
}
