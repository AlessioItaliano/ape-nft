import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    gap: 40px;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    gap: 80px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  max-width: 216px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    min-width: 100%;
  }
`;

export const Item = styled.li`
  display: flex;
  position: relative;

  gap: 8px;
  padding: 8px 8px 10px 8px;

  counter-increment: list-counter;
  cursor: pointer;

  color: ${vars.colors.whiteText};

  &:first-child {
    padding: 0 8px 10px 8px;
  }

  &:last-child {
    padding: 8px 8px 0 8px;
  }

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding: 18px 16px 23px 180px;
    gap: 21px;

    &:first-child {
      padding: 0 16px 23px 180px;
    }

    &:last-child {
      padding: 18px 16px 0 180px;
    }
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: 24px 24px 24px 296px;
    gap: 27px;

    &:first-child {
      padding: 0 24px 24px 296px;
    }

    &:last-child {
      padding: 24px 24px 0 296px;
    }
  }

  &:focus,
  &:hover,
  &:active {
    color: ${vars.colors.redText};
  }

  &::before {
    content: '[ ' counter(list-counter) ' ]  ';
    color: ${vars.colors.redText};

    font-family: ${vars.fonts.biro};
    line-height: 1.66em;

    white-space: nowrap;
    padding-top: 4px;

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
      font-size: 16px;
      line-height: 1.68em;

      padding-top: 8px;
    }

    @media screen and (min-width: ${vars.breakpoints.desktop}) {
      font-size: 24px;
      line-height: 1.66em;

      padding-top: 21px;
    }
  }

  &:focus::before,
  &:hover::before,
  &:active::before{
    color: ${vars.colors.whiteText};
  }

  ${props =>
    props.$active &&
    `
    border-radius: 12px;

     &:first-child {
      padding-top: 8px
    }

    &:last-child {
      padding-bottom: 10px;
    }

      @media screen and (min-width: ${vars.breakpoints.tablet}) {
        &:first-child {
          padding-top: 8px
        }
        &:last-child {
          padding-bottom: 10px;
        }

    padding: 18px 16px 23px 180px !important;
  }

      @media screen and (min-width: ${vars.breakpoints.desktop}) {
        &:first-child {
          padding-top: 8px
        }
        &:last-child {
          padding-bottom: 10px;
        }
    padding: 24px 24px 24px 296px !important; 
  }

    color: ${vars.colors.redText};
    background-color: ${vars.colors.bgTertiary};

        &:before {
      color: ${vars.colors.whiteText};
    }

      > ${ItemContainer} > ${DescriptionContainer} > ${Description} {
      display: block;
    } 
      > ${ItemContainer} > ${ImageContainer}  {
          @media screen and (min-width: ${vars.breakpoints.tablet}) {
      display: block;
    } 
  `}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    gap: 12px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    gap: 36px;
  }
`;

export const Main = styled.p`
  font-family: ${vars.fonts.grotesk};
  font-size: 20px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const Description = styled.p`
  display: none;

  text-transform: uppercase;

  color: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
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

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    position: absolute;
    z-index: 1000;
    top: -15px;
    left: 19px;

    width: auto;
    height: 183px;

    border-radius: 16px;
    overflow: hidden;
    transform: rotate(-16deg);
    color: ${vars.colors.redText};

    background-color: ${vars.colors.bgTertiary};
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    left: 15px;
    height: 282px;
    transform: rotate(-8deg);
    border-radius: 24px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
