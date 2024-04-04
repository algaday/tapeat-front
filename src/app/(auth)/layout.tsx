import styles from './auth.module.css'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main className={styles.wrapper}>{children}</main>
    </>
  )
}
