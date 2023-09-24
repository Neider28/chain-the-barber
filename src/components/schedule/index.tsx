import { Fade } from 'react-awesome-reveal';
import styles from './index.module.css'

export default function Schedule() {
  return (
    <section className={styles.schedule_container}>
      <div className={styles.schedule_center}>
        <div className={styles.schedule_content}>
          <Fade direction='left' triggerOnce={true}>
            <h2>Team of professionals is waiting for you</h2>
            <p>Risus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus fusce consequat donec vitae porttitor elementum volutpat gravida. Tellus hac tristique nisi, id amet cras tempor, amet.</p>
          </Fade>
        </div>
        <div className={styles.schedule_hours}>
          <Fade direction='right' triggerOnce={true}>
            <h2>Special Opening Hours</h2>
          </Fade>
          <div className={styles.schedule_hours_list}>
            <div className={styles.schedule_hours_sublist}>
              <div className={styles.hour_item}>
                <Fade direction='right' triggerOnce={true}>
                  <h4>Lunes:</h4>
                  <span>9:00 a.m. – 7:30 p.m.</span>
                </Fade>
              </div>
              <div className={styles.hour_item}>
                <Fade direction='right' triggerOnce={true}>
                  <h4>Martes:</h4>
                  <span>9:00 a.m. – 7:30 p.m.</span>
                </Fade>
              </div>
              <div className={styles.hour_item}>
                <Fade direction='right' triggerOnce={true}>
                  <h4>Miércoles:</h4>
                  <span>9:00 a.m. – 7:30 p.m.</span>
                </Fade>
              </div>
              <div className={styles.hour_item}>
                <Fade direction='right' triggerOnce={true}>
                  <h4>Jueves:</h4>
                  <span>9:00 a.m. – 7:30 p.m.</span>
                </Fade>
              </div>
            </div>
            <div className={styles.schedule_hours_sublist}>
              <div className={styles.hour_item}>
                <Fade direction='right' triggerOnce={true}>
                  <h4>Viernes:</h4>
                  <span>9:00 a.m. – 7:30 p.m.</span>
                </Fade>
              </div>
              <div className={styles.hour_item}>
                <Fade direction='right' triggerOnce={true}>
                  <h4>Sábado:</h4>
                  <span>9:00 a.m. – 7:30 p.m.</span>
                </Fade>
              </div>
              <div className={styles.hour_item}>
                <Fade direction='right' triggerOnce={true}>
                  <h4>Domingo:</h4>
                  <span>9:00 a.m. – 7:30 p.m.</span>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
