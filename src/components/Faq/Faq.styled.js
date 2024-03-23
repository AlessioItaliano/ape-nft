import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    gap: 40px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    gap: 80px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  display: flex;
  position: relative;

  gap: 8px;
  padding: 8px;

  counter-increment: list-counter;
  cursor: pointer;

  color: ${variables.colors.whiteText};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 18px 16px 23px 180px;
    gap: 21px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding: 24px 15px 24px 250px;
    gap: 27px;
  }

  &:focus,
  &:hover {
    color: ${variables.colors.redText};
  }

  &::before {
    content: '[ ' counter(list-counter) ' ]  ';
    color: ${variables.colors.redText};

    font-family: ${variables.fonts.biro};
    line-height: 1.66em;

    white-space: nowrap;
    padding-top: 4px;

    @media screen and (min-width: ${variables.breakpoints.tablet}) {
      font-size: 16px;
      line-height: 1.68em;

      padding-top: 8px;
    }

    @media screen and (min-width: ${variables.breakpoints.desktop}) {
      font-size: 24px;
      line-height: 1.66em;

      padding-top: 21px;
    }
  }

  &:focus::before,
  &:hover::before {
    color: ${variables.colors.whiteText};
  }

  ${props =>
    props.$active &&
    `
    border-radius: 12px;

    color: ${variables.colors.redText};
    background-color: ${variables.colors.bgTertiary};

        &:before {
      color: ${variables.colors.whiteText};
    }

      > ${ItemContainer} > ${DescriptionContainer} > ${Description} {
      display: block;
    } 
      > ${ItemContainer} > ${ImageContainer}  {
          @media screen and (min-width: ${variables.breakpoints.tablet}) {
      display: block;
    } 
  `}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    gap: 12px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    gap: 36px;
  }
`;

export const Main = styled.p`
  font-family: ${variables.fonts.grotesk};
  font-size: 20px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const Description = styled.p`
  display: none;

  text-transform: uppercase;

  color: ${variables.colors.whiteText};

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.18em;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
`;

export const ImageContainer = styled.div`
  display: none;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    position: absolute;
    z-index: 1000;
    top: -15px;
    left: 20px;

    width: auto;
    height: 183px;

    border-radius: 20px;
    overflow: hidden;
    transform: rotate(-16deg);
    color: ${variables.colors.redText};

    background-color: ${variables.colors.bgTertiary};
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    left: 15px;
    height: 282px;
    transform: rotate(-8deg);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
