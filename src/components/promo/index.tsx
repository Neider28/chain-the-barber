import { Fade } from 'react-awesome-reveal';
import styles from './index.module.css';

export default function Promo() {
  return (
    <section className={styles.promo_container}>
      <div className={styles.promo_content}>
        <Fade direction='left' triggerOnce={true}>
          <h2>Ready to transform?</h2>
        </Fade>
        <Fade direction='right' triggerOnce={true}>
          <p>Tincidunt ante faucibus in dui quam aliquam integer nunc neque. Augue in nullam urna nulla. Sed nisi habitant elementum cras duis placerat egestas nisl. Vestibulum molestie tellus facilisi id. Sed id.</p>
        </Fade>
      </div>
      <Fade direction='up' triggerOnce={true}>
        <div className={styles.promo_wrapper}>
          <a href="#">Reservar ahora</a>
        </div>
      </Fade>
    </section>
  )
}