'use client'
import { useState } from 'react'
import { MenuModal } from '../menu-modal/menu-modal'
import styles from './menu.module.css'

export function Menu() {
  const [showModal, setShowModal] = useState(false)
  const handleModal = () => {
    setShowModal(!showModal)
  }
  return (
    <ul className={styles.navigation}>
      <li>
        <button onClick={handleModal}>User Name</button>
        {showModal && <MenuModal />}
      </li>
    </ul>
  )
}
