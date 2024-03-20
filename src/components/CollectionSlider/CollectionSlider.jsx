import React, { useRef } from 'react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { imagesMobile } from '../../images/nft/images';
import { variables } from 'stylesheet/variables';

import * as s from './CollectionSlider.styled';

const CollectionSlider = () => {
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
        {imagesMobile.map((image, index) => (
          <s.Item key={index}>
            <s.ImageContainer>
              <s.Image
                srcSet={`${image.mobile1x} 1x, ${image.mobile2x} 2x`}
                src={image.mobile1x}
                alt={image.alt}
              />
            </s.ImageContainer>
          </s.Item>
        ))}
        <s.SliderButtonContainer>
          <s.SliderButton onClick={goPrev}>Prev</s.SliderButton>
          <s.SliderButton onClick={goNext}>Next</s.SliderButton>
        </s.SliderButtonContainer>
      </s.Slider>
    </>
  );
};

export default CollectionSlider;
