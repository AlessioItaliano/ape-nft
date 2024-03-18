import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import { variables } from '../../stylesheet/variables';

export const Slider = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const Item = styled(SwiperSlide)`
  // display: flex;
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

export const Image = styled.img`
  border-radius: 12px;
`;

export const SliderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const ItemRed = styled(SwiperSlide)`
  display: flex;
  align-items: flex-end;

  width: calc(100% - 24px);
  height: 242px;
  padding: 24px 12px;
  border-radius: 12px;

  box-sizing: border-box;
  background: ${variables.colors.bgSecondary};

  position: relative;
`;

export const ArrowIconLink = styled.a`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 48px;
  height: 48px;

  padding: 12px;

  cursor: pointer;

  fill: ${variables.colors.whiteText};
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
