import Image from 'next/image'
import { Slide } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Scrollbar, Autoplay, Pagination, Navigation } from 'swiper/modules';
import hero1 from './../../../public/assets/images/hero04.webp';
import hero2 from './../../../public/assets/images/hero02.webp';
import styles from './index.module.css'

export default function Hero() {
  return (
    <section className={styles.hero_container}>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Scrollbar, Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={hero1}
            alt='Logo'
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={hero2}
            alt='Logo'
            fill
            sizes="100%"
            style={{
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.hero_content}>
        <div className={styles.hero_wrapper}>
          <Slide direction='down'>
            <h1>We will keep you an impeccable look</h1>
            <p>Carrera 14 #42-62, California 62639</p>
          </Slide>
        </div>
      </div>
    </section>
  )
}
