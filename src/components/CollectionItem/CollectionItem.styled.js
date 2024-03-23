import styled from 'styled-components';

import { SwiperSlide } from 'swiper/react';

import { vars } from 'stylesheet/variables';

export const Item = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 256px;
  max-width: 216px;
  border-radius: 12px;

  overflow: hidden;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    height: 336px;
    max-width: 284px;
    border-radius: 24px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    height: 280px;
    max-width: 240px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
