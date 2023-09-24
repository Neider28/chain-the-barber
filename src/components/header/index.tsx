import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import logo from './../../../public/assets/images/logo.png';
import styles from './index.module.css'

export default function Header() {
  const [open, setOpen] = useState(false);
  const [swaperUp, setSwaperUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setSwaperUp(true);
      } else {
        setSwaperUp(false);
      }
    });
  }, []);

  return (
    <header className={`${styles.header_container} ${swaperUp && `${styles.swaper_up}`}`}>
      <div className={styles.header_center}>
        <div className={styles.header_logo}>
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
        <button className={`${styles.nav_bar_mobile} ${open && `${styles.open}`}`} onClick={() => setOpen(!open)}>
          <span></span>
        </button>
        <nav className={`${styles.nav_menu} ${!open && `${styles.active}`}`} >
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/about">Acerca de</Link>
            </li>
            <li>
              <Link href="/services">Servicios</Link>
            </li>
            <li>
              <Link href="/gallery">Galería</Link>
            </li>
            <li>
              <Link href='/contact'>Contacto</Link>
            </li>
          </ul>
          <a href="http://">Reservar ahora</a>
        </nav>
      </div>
    </header>
  )
}
