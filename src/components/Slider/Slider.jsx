import React, { useRef } from 'react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { variables } from 'stylesheet/variables';

import * as s from './Slider.styled';

const Slider = ({ data, children }) => {
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

  const breakpoints = {
    [variables.breakpoints.tablet.slice(0, -2) - 1]: {
      slidesPerView: 2,
    },
    [variables.breakpoints.desktop.slice(0, -2) - 1]: {
      slidesPerView: 4,
    },
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
        slidesPerView={1}
        spaceBetween={24}
        centeredSlidesBounds={true}
        breakpoints={breakpoints}
      >
        {data.map((item, index) => (
          <s.Item key={index}>{React.cloneElement(children, { item })}</s.Item>
        ))}
        <s.ButtonContainer>
          <s.SliderButton onClick={goPrev}>Prev</s.SliderButton>
          <s.SliderButton onClick={goNext}>Next</s.SliderButton>
        </s.ButtonContainer>
      </s.Slider>
    </>
  );
};

export default Slider;
