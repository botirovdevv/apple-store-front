"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { watches } from '@/app/constants/applewatch';

const Watches: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const leftWatchControls = useAnimation();
  const rightWatchControls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const node = ref.current;
      if (node) {
        const scrollY = window.scrollY;
        const bannerHeight = node.clientHeight;
        const threshold = bannerHeight / 2;

        if (scrollY > threshold) {
          leftWatchControls.start({ x: -Math.min(scrollY - threshold, 600) });
          rightWatchControls.start({ x: Math.min(scrollY - threshold, 600) });
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
          handleScroll();
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0.1 }
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [leftWatchControls, rightWatchControls]);

  return (
    <div className="watches">
      <div className="container">
        <div className="apple-watch-banner" ref={ref}>
          <h1 className="apple-watch-title">Apple Watch</h1>
          <motion.img
            src="/images/applewatch2.png"
            alt="Left Apple Watch"
            className="apple-watch left-watch"
            animate={leftWatchControls}
            initial={{ x: 0 }}
          />
          <motion.img
            src="/images/applewatch.png"
            alt="Right Apple Watch"
            className="apple-watch right-watch"
            animate={rightWatchControls}
            initial={{ x: 0 }}
          />
        </div>
      </div>

      <div className="slider">
        <div className="slider-container">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              728: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              276: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
            }}
          >
            {watches.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div className={`slider-card ${index === activeIndex ? 'active' : ''}`}>
                  <Image
                    src={product.image}
                    quality={100}
                    className="slider-img"
                    alt={product.title}
                    width={180}
                    height={257}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="slider-colors">
                    {product.colors.map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className="slider-color"
                        style={{ backgroundColor: color.toLowerCase() }}
                      ></span>
                    ))}
                  </div>
                  {index === activeIndex && <span className="slider-label">New</span>}
                  <h3 className="slider-name">{product.title}</h3>
                  <p className="slider-price">{product.price}</p>
                  <button className="slider-buy_button">Add to basket</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
