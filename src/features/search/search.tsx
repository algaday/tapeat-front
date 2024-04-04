import { LuSearch } from 'react-icons/lu'
import styles from './search.module.css'
export function Search() {
  return (
    <div className={styles.container}>
      <div className={styles['search-box']}>
        <LuSearch className={styles.icon} />
        <input
          type='search'
          placeholder='Search...'
          className={styles.search}
        />
      </div>
      <button className={styles.btn}>Search</button>
    </div>
  )
}
