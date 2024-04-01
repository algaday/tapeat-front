import Image from 'next/image'
import styles from './logo.module.css'
import { montserrat } from '@/shared/fonts/fonts'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href='/' className={styles.container}>
      <Image
        src='/logo-icon.png'
        alt='Tapeat Logo Icon'
        width={25}
        height={25}
      />
      <h2 className={montserrat.className}>Tapeat</h2>
    </Link>
  )
}
