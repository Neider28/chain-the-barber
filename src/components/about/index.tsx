import { Fade } from 'react-awesome-reveal';
import styles from './index.module.css';

export default function About() {
  return (
    <section className={styles.about_container}>
      <div className={styles.about_main}>
        <div className={styles.about_header}>
          <Fade direction='left' triggerOnce={true}>
            <h2>professional barbershop for men only</h2>
          </Fade>
        </div>
        <div className={styles.about_content}>
          <Fade direction='right' triggerOnce={true}>
            <p>Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh pellentesque. Vitae nunc, dolor, blandit eget eleifend etiam id. Amet arcu lobortis sed pulvinar cursus pretium sit pretium.</p>
            <div className={styles.about_wrapper}>
              <div className={styles.about_info_fact}>
                <h3>Since 2015</h3>
                <p>Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim duis cras odio.</p>
              </div>
              <div className={styles.about_info_fact}>
                <h3>1000+ clients</h3>
                <p>Metus varius vitae habitant lorem. Porta scelerisque facilisi.</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
