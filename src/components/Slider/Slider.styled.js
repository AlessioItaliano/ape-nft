import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import { vars } from '../../stylesheet/variables';

export const Slider = styled(Swiper)`
  display: flex;
  flex-direction: column;

  gap: 24px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    gap: 48px;
  }
`;

export const Item = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 48px;
`;

export const SliderButton = styled.button`
  font-family: ${vars.fonts.biro};
  font-size: 24px;
  line-height: 1.25em;

  border: none;
  color: ${vars.colors.whiteText};
  background-color: inherit;

  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: ${vars.colors.redText};
  }
`;
