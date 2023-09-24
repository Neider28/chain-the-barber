'use client'
import Image from 'next/image'
import About from "@/components/about";
import service from '../../../public/assets/images/schedule-bg.webp'
import styles from './page.module.css'
import Masters from '@/components/masters';
import Promo from '@/components/promo';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Chain The Barber | Acerca de';
  }, []);

  return (
    <>
      <About></About>
      <section className={styles.about_container}>
        <div className={styles.about_center}>
          <div className={styles.about_image}>
            <Image
              src={service}
              alt='Logo'
              quality={100}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className={styles.about_description}>
            <p>Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh pellentesque. Vitae nunc, dolor, blandit eget eleifend etiam id. Amet arcu lobortis sed pulvinar cursus pretium sit pretium.</p>
            <p>Mollis rhoncus sem nisl dictumst mauris. At faucibus arcu, scelerisque ultricies accumsan arcu, molestie. Sed ac elit varius enim venenatis ac, id. Ullamcorper non interdum posuere sit nibh id metus.</p>
          </div>
          <Masters></Masters>
        </div>
      </section>
      <Promo></Promo>
    </>
  )
}
