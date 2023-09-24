'use client'
import { useEffect } from 'react';
import styles from './page.module.css'

export default function Gallery() {
  useEffect(() => {
    document.title = 'Chain The Barber | Galería';
  }, []);

  return (
    <section className={styles.gallery_container}>
      <div className={styles.gallery_center}>
        <div className={styles.gallery_header}>
          <h2>Gallery with our Cuts</h2>
        </div>
        <div className={styles.gallery_content}>

        </div>
      </div>
    </section>
  )
}