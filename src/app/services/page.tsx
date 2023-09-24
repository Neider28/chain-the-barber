'use client'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal';
import service from '../../../public/assets/images/gallery01.webp'
import styles from './page.module.css'
import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    document.title = 'Chain The Barber | Servicios';
  }, []);

  return (
    <section className={styles.services_container}>
      <div className={styles.services_center}>
        <Fade direction='left' triggerOnce={true}>
          <div className={styles.services_header}>
            <h2>We provide the highest quality service</h2>
            <p>Eget ut sodales arcu aliquet diam nec laoreet fames. Urna, eu pharetra consequat, euismod iaculis tristique maecenas. Et enim iaculis suscipit nunc ultricies nunc fames. Phasellus massa, sed.</p>
          </div>
        </Fade>
        <div className={styles.services_list}>
          <div className={styles.service_item}>
            <div className={styles.service_image}>
              <Fade direction='right' triggerOnce={true}>
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
              </Fade>
            </div>
            <div className={styles.service_content}>
              <Fade direction='left' triggerOnce={true}>
                <h3>Haircut</h3>
                <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque. Convallis nec lectus mi nec eget odio ac tempor. Nunc egestas sed.</p>
                <span>$300</span>
              </Fade>
              <Fade direction='up' triggerOnce={true}>
                <div className={styles.service_wrapper}>
                  <a href="#">Reservar ahora</a>
                </div>
              </Fade>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_image}>
              <Fade direction='left' triggerOnce={true}>
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
              </Fade>
            </div>
            <div className={styles.service_content}>
              <Fade direction='right' triggerOnce={true}>
                <h3>Haircut</h3>
                <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque. Convallis nec lectus mi nec eget odio ac tempor. Nunc egestas sed.</p>
                <span>$300</span>
              </Fade>
              <Fade direction='up' triggerOnce={true}>
                <div className={styles.service_wrapper}>
                  <a href="#">Reservar ahora</a>
                </div>
              </Fade>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_image}>
              <Fade direction='right' triggerOnce={true}>
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
              </Fade>
            </div>
            <div className={styles.service_content}>
              <Fade direction='left' triggerOnce={true}>
                <h3>Haircut</h3>
                <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque. Convallis nec lectus mi nec eget odio ac tempor. Nunc egestas sed.</p>
                <span>$300</span>
              </Fade>
              <Fade direction='up' triggerOnce={true}>
                <div className={styles.service_wrapper}>
                  <a href="#">Reservar ahora</a>
                </div>
              </Fade>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_image}>
              <Fade direction='left' triggerOnce={true}>
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
              </Fade>
            </div>
            <div className={styles.service_content}>
              <Fade direction='right' triggerOnce={true}>
                <h3>Haircut</h3>
                <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque. Convallis nec lectus mi nec eget odio ac tempor. Nunc egestas sed.</p>
                <span>$300</span>
              </Fade>
              <Fade direction='up' triggerOnce={true}>
                <div className={styles.service_wrapper}>
                  <a href="#">Reservar ahora</a>
                </div>
              </Fade>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_image}>
              <Fade direction='right' triggerOnce={true}>
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
              </Fade>
            </div>
            <div className={styles.service_content}>
              <Fade direction='left' triggerOnce={true}>
                <h3>Haircut</h3>
                <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque. Convallis nec lectus mi nec eget odio ac tempor. Nunc egestas sed.</p>
                <span>$300</span>
              </Fade>
              <Fade direction='up' triggerOnce={true}>
                <div className={styles.service_wrapper}>
                  <a href="#">Reservar ahora</a>
                </div>
              </Fade>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_image}>
              <Fade direction='left' triggerOnce={true}>
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
              </Fade>
            </div>
            <div className={styles.service_content}>
              <Fade direction='right' triggerOnce={true}>
                <h3>Haircut</h3>
                <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque. Convallis nec lectus mi nec eget odio ac tempor. Nunc egestas sed.</p>
                <span>$300</span>
              </Fade>
              <Fade direction='up' triggerOnce={true}>
                <div className={styles.service_wrapper}>
                  <a href="#">Reservar ahora</a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
