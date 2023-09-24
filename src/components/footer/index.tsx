import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import logo from './../../../public/assets/images/logo.png';
import styles from './index.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_center}>
        <div className={styles.footer_logo}>
          <Link href="/">
            <Image
              src={logo}
              alt='Logo'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Link>
        </div>
        <div className={styles.footer_contact}>
          <h3><a href='tel:+573027342090'>+57 302 7342090</a></h3>
          <p>Carrera 14 #42-62, California 62639</p>
          <a href='mailto:name@email.com' className={styles.email}>barbercrop@example.com</a>
          <div className={styles.social_container}>
            <a href='https://www.facebook.com/jholverhelianchain' target='_blank'>
              <Icon icon="gg:facebook" className={styles.social_icon} />
            </a>
            <a href='https://www.instagram.com/chainthebarber/' target='_blank'>
              <Icon icon="akar-icons:instagram-fill" className={styles.social_icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer_credits}>
        <p>Hecho por <a href="https://neidersilva.vercel.app/" target='_blank'>Neider Silva</a> © Chain The Barber</p>
        <span>Todos los derechos reservados, 2023</span>
      </div>
    </footer>
  )
}
