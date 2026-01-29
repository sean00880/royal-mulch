import Link from 'next/link';
import React from 'react';
import { EffectFade, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {IoIosCall} from 'react-icons/io'

// Import Swiper styles
import 'swiper/css/bundle';

const HeroSliderTwo = () => {

    const SliderItem = [
        {
            id: 1,
            sliderBg: '/assets/img/banner/banner-2-1.jpg',
            sliderSubtitle: `Canal Winchester | Pickerington | Carroll | Groveport | Lancaster | Sugar Grove | Amanada`,
            sliderTitle: 'Triple Ground Mulch',
            sliderDesc: 'Premium Mulch Supplies in Lancaster, Ohio & Surrounding Regions – Enhance Your Landscape with Quality Mulch Solutions!',
            slidereviewImg: '/assets/img/banner/meta-review-thumb.png',
            slidereviewText: 'Active Review',
            slidereviewCount: '3200+',
            sliderBtn: 'get in touch',
        },
        {
            id: 2,
            sliderBg: '/assets/img/banner/banner-4-1.jpg',
            sliderSubtitle: `Canal Winchester | Pickerington | Carroll | Groveport | Lancaster | Sugar Grove | Amanada`,
            sliderTitle: 'Available in Bulk',
            sliderDesc: 'Premium Mulch Supplies in Lancaster, Ohio & Surrounding Regions – Enhance Your Landscape with Quality Mulch Solutions!',
            slidereviewImg: '/assets/img/banner/meta-review-thumb.png',
            slidereviewText: 'Active Review',
            slidereviewCount: '3200+',
            sliderBtn: 'get in touch',
        },
        {
            id: 3,
            sliderBg: '/assets/img/banner/banner-1-1.jpg',
            sliderSubtitle: `Canal Winchester | Pickerington | Carroll | Groveport | Lancaster | Sugar Grove | Amanada`,
            sliderTitle: 'Unparalleled Quality',
            sliderDesc: 'Premium Mulch Supplies in Lancaster, Ohio & Surrounding Regions – Enhance Your Landscape with Quality Mulch Solutions!',
            slidereviewImg: '/assets/img/banner/meta-review-thumb.png',
            slidereviewText: 'Active Review',
            slidereviewCount: '3200+',
            sliderBtn: 'get in touch',
        }
    ];

    return (
        <div className="banner-area banner-area2 pos-rel">
            <div className="swiper-container slider__active">
                {SliderItem &&
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            effect={"fade"}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                        >
                            {SliderItem.map((item, num) => (
                                <SwiperSlide key={num}>
                                    <div className="swiper-slidess">
                                        <div className="single-banner single-banner-2 banner-850 d-flex align-items-center pos-rel">
                                            <div className="banner-bg banner-bg2 banner-bg2-1" style={{ backgroundImage: `url(${item.sliderBg})`}}>
                                            </div>
                                            <div className="container pos-rel">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="banner-content banner-content2 banner-content2-1">
                                                            
                                                            <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">{item.sliderTitle}</h1>
                                                            
                                                            <div className="banner-text" data-animation="fadeInUp" data-delay=".7s">
                                                            
                                                                <p>{item.sliderDesc}</p>
                                                                <br />
                                                                <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                                    <Link href="#mulch-selection"><a className="fill-btn">Explore Mulch Supplies</a></Link>
                                                                    
                                                                </div>
                                                                <hr />
                                                                Areas Serving: 
                                                                <br />
                                                                <br />

                                                               

                                                                <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                                <span>{item.sliderSubtitle}</span>

                                                              
                                                            
                                                                
                                                            </div>

                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                }
            </div>
        </div>
    );
};

export default HeroSliderTwo;