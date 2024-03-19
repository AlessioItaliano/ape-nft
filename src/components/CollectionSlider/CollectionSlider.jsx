import React, { useRef } from 'react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { imagesMobile } from '../../images/nft/images';

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
        centeredSlidesBounds={true}
        // loop={true}
      >
        {imagesMobile.map((image, index) => (
          <s.Item key={index}>
            <s.Image
              srcSet={`${image.mobile1x} 1x, ${image.mobile2x} 2x`}
              src={image.mobile1x}
              alt={image.alt}
            />
          </s.Item>
        ))}
      </s.Slider>
      <s.SliderButtonContainer>
        <s.SliderButton onClick={goPrev}>Prev</s.SliderButton>
        <s.SliderButton onClick={goNext}>Next</s.SliderButton>
      </s.SliderButtonContainer>
    </>
  );
};

export default CollectionSlider;
