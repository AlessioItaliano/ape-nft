import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import { variables } from '../../stylesheet/variables';

export const Slider = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const Item = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h2`
  color: ${variables.colors.whiteText};
  font-family: ${variables.fonts.grotesk};
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1em;
  text-transform: uppercase;
`;

export const Next = styled.button`
  color: ${variables.colors.whiteText};
  background-color: inherit;
  font-family: ${variables.fonts.grotesk};
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1em;
  text-transform: uppercase;

  &:focus {
    color: ${variables.colors.redText};
  }
`;

export const Prev = styled.button`
  color: ${variables.colors.whiteText};
  background-color: inherit;
  font-family: ${variables.fonts.grotesk};
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1em;
  text-transform: uppercase;

  &:focus {
    color: ${variables.colors.redText};
  }
`;
