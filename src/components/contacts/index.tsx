import { Fade } from 'react-awesome-reveal';
import MapContact from '../map'
import styles from './index.module.css'

export default function Contacts() {
  return (
    <section className={styles.contacts_container}>
      <div className={styles.contacts_center}>
        <Fade direction='left' triggerOnce={true}>
          <h2>Let’s talk or book now</h2>
        </Fade>
        <div className={styles.contacts_list}>
          <div className={styles.contact_item}>
            <h3>Email</h3>
            <a href='mailto:name@email.com' className={styles.link}>barbercrop@example.com</a>
          </div>
          <div className={styles.contact_item}>
            <h3>Address</h3>
            <p>Carrera 14 #42-62, California 62639</p>
          </div>
          <div className={styles.contact_item}>
            <h3>Phone</h3>
            <a href='tel:+573027342090' className={styles.link}>+57 302 7342090</a>
          </div>
        </div>
      </div>
      <div className={styles.map_container}>
        <MapContact></MapContact>
      </div>
    </section>
  )
}
