import Link from 'next/link'
import styles from './menu-modal.module.css'
import { GiEvilBook } from 'react-icons/gi'
import { GiTigerHead } from 'react-icons/gi'
import { BsHeartbreak } from 'react-icons/bs'

export function MenuModal() {
  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <ul className={styles.list}>
          <li>
            <div className={styles.title}>
              <Link href='#' className={styles.link}>
                <GiTigerHead className={styles.icon} />
                <p>Profile</p>
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.title}>
              <Link href='#' className={styles.link}>
                <GiEvilBook className={styles.icon} />
                <p>My Orders</p>
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.title}>
              <Link href='#' className={styles.link}>
                <BsHeartbreak className={styles.icon} />
                <p>Logout</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
