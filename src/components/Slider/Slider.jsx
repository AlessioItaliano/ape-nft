import React, { useRef } from 'react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { vars } from 'stylesheet/variables';

import * as s from './Slider.styled';

const Slider = ({ data, children }) => {
  const swiperRef = useRef(null);

  const clickNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const clickPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const breakpoints = {
    [vars.breakpoints.tablet.slice(0, -2) - 1]: {
      slidesPerView: 2,
    },
    [vars.breakpoints.desktop.slice(0, -2) - 1]: {
      slidesPerView: 4,
    },
  };

  return (
    <s.Slider
      ref={swiperRef}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={24}
      centeredSlidesBounds={true}
      breakpoints={breakpoints}
    >
      {data.map((item, index) => (
        <s.Item key={index}>{React.cloneElement(children, { item })}</s.Item>
      ))}
      <s.ButtonContainer>
        <s.SliderButton onClick={clickPrev} aria-label="Previous slide">
          Prev
        </s.SliderButton>
        <s.SliderButton onClick={clickNext} aria-label="Next slide">
          Next
        </s.SliderButton>
      </s.ButtonContainer>
    </s.Slider>
  );
};

export default Slider;
