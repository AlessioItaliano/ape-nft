import styled from 'styled-components';

import { SwiperSlide } from 'swiper/react';

import { variables } from '../../stylesheet/variables';

export const Item = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;

  // flex-direction: column;
  // justify-content: space-between;
  // align-items: flex-start;
  // width: calc(100% - 24px);
  // width: 100%;
  // height: 242px;
  // padding: 24px 12px;

  // border-radius: 12px;
  // background: ${variables.colors.bgTertiary};
  // box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  height: 256px;
  max-width: 216px;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    height: 336px;
    max-width: 284px;
    border-radius: 20px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    height: auto;
    max-width: 280px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
