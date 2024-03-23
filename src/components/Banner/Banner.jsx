import React, { useEffect } from 'react';
import anime from 'animejs';

import { ReactComponent as CloseIcon } from 'icons/close.svg';

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
      <s.Container id="bannerText">
        <s.IconContainer>
          {' '}
          <s.Box>
            <CloseIcon />
          </s.Box>
        </s.IconContainer>{' '}
        <s.Text>Destroy stereotypes</s.Text>
        <s.IconContainer>
          {' '}
          <s.Box>
            <CloseIcon />
          </s.Box>
        </s.IconContainer>{' '}
        <s.Text>HAVE NO LIMITS</s.Text>
        <s.IconContainer>
          {' '}
          <s.Box>
            <CloseIcon />
          </s.Box>
        </s.IconContainer>{' '}
        <s.Text>Break rules</s.Text>
        <s.IconContainer>
          {' '}
          <s.Box>
            <CloseIcon />
          </s.Box>
        </s.IconContainer>{' '}
      </s.Container>
    </s.Banner>
  );
};

export default Banner;
