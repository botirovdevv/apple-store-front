"use client"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { products } from '@/app/constants/slider';

const ProductSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="slider">
            <div className="slider-container">
                <h2 className="slider-title">Newest ex.iphones. Collection</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    centeredSlides={true}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
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
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={product.id}>
                            <div className={`slider-card ${index === activeIndex ? 'active' : ''}`}>
                                <Image src={product.image} quality={100} className='slider-img' alt={product.title} width={180} height={257} objectFit="cover" />
                                <div className="slider-colors">
                                    {product.colors.map((color, colorIndex) => (
                                        <span key={colorIndex} className="slider-color" style={{ backgroundColor: color.toLowerCase() }}>
                                        </span>
                                    ))}
                                </div>
                                {index === activeIndex && <span className="slider-label">New</span>}
                                <h3 className='slider-name'>{product.title}</h3>
                                <p className='slider-price'>{product.price}</p>


                                <button className="slider-buy_button">Buy</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    );
};

export default ProductSlider;
