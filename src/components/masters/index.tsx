import Image from 'next/image'
import { Fade } from 'react-awesome-reveal';
import service from '../../../public/assets/images/team01.webp'
import styles from './index.module.css';

export default function Masters() {
  return (
    <section className={styles.masters_container}>
      <Fade direction='right' triggerOnce={true}>
        <h2>Meet the master</h2>
      </Fade>
      <Fade direction='up' triggerOnce={true}>
      <div className={styles.masters_list}>
        <div className={styles.master_item}>
          <div className={styles.master_image}>
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
          <div className={styles.master_content}>
            <h3>Helian Chain</h3>
            <span>Top Barber</span>
          </div>
        </div>
        <div className={styles.master_item}>
          <div className={styles.master_image}>
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
          <div className={styles.master_content}>
            <h3>Helian Chain</h3>
            <span>Top Barber</span>
          </div>
        </div>
      </div>
      </Fade>
    </section>
  )
}
