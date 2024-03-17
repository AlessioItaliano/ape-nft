import React, { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import * as s from './Slider.styled';

import { Navigation } from 'swiper/modules';

const Slider = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <s.Slider
        ref={swiperRef}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation]}
        // spaceBetween={50}
        slidesPerView={1}
      >
        <s.Item>Slide 1</s.Item>
        <s.Item>Slide 2</s.Item>
        <s.Item>Slide 3</s.Item>
        <s.Item>Slide 4</s.Item>
        <s.Item>Slide 5</s.Item>
      </s.Slider>
      <s.Prev onClick={goPrev}>Prev</s.Prev>
      <s.Next onClick={goNext}>Next</s.Next>
    </>
  );
};

export default Slider;
