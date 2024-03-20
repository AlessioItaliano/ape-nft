import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import { variables } from '../../stylesheet/variables';

export const Slider = styled(Swiper)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
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
  font-family: ${variables.fonts.biro};
  font-size: 24px;
  // font-weight: 400;
  line-height: 1em;

  border: none;
  color: ${variables.colors.whiteText};
  background-color: inherit;

  cursor: pointer;

  &:hover {
    color: ${variables.colors.redText};
  }
`;
