import styles from './test.module.css'
export function Test() {
  return (
    <div className={styles.menu__wrapper}>
      <div className={styles.menu__bar}>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <button>Features</button>
              <div className={styles.dropdown__wrapper}>
                <div className={styles.dropdown}>
                  <ul className={styles['list-items-with-description']}>
                    <li>
                      <div className={styles['item-title']}>
                        <h3>Previews</h3>
                        <p>Zero config, more innovations</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
