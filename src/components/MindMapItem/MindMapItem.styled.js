import styled from 'styled-components';

import { SwiperSlide } from 'swiper/react';

import { variables } from '../../stylesheet/variables';
// export const List = styled.ul``;

export const Item = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  width: 216px;
  height: 242px;
  padding: 24px 12px;

  border-radius: 12px;
  background: ${variables.colors.bgTertiary};
`;

export const Title = styled.h3`
  color: ${variables.colors.whiteText};
  font-family: ${variables.fonts.grotesk};
  font-size: 32px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: ${variables.colors.whiteText};
  text-transform: uppercase;
`;

export const ItemRed = styled.li``;

export const ArrowIconContainer = styled.div``;
