import React, { useEffect } from 'react';
import anime from 'animejs';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import * as s from './Banner.styled';

const Banner = () => {
  useEffect(() => {
    anime({
      targets: '#bannerText',
      translateX: ['-60%', '60%'],
      duration: 20000,
      easing: 'linear',
      loop: true,
    });
  }, []);

  return (
    <s.Banner>
      <s.BannerText id="bannerText">
        <s.IconContainer>
          {' '}
          <CloseIcon />
        </s.IconContainer>{' '}
        Destroy stereotypes
        <s.IconContainer>
          {' '}
          <CloseIcon />
        </s.IconContainer>{' '}
        HAVE NO LIMITS
        <s.IconContainer>
          {' '}
          <CloseIcon />
        </s.IconContainer>{' '}
        Break rules
        <s.IconContainer>
          {' '}
          <CloseIcon />
        </s.IconContainer>{' '}
      </s.BannerText>
    </s.Banner>
  );
};

export default Banner;
