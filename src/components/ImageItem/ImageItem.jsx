import { vars } from 'stylesheet/variables';

import * as s from './ImageItem.styled';

const ImageItem = ({ item }) => {
  const { image1x, image2x, alt } = item[0];

  return (
    <s.Image
      srcSet={`
          ${image1x.mobile} 300w,
          ${image2x.mobile} 600w,
          ${image1x.tablet} 768w,
          ${image2x.tablet} 1536w,
          ${image1x.desktop} 1280w,
          ${image2x.desktop} 2560w
        `}
      sizes={`
          (min-width: ${vars.breakpoints.mobileMin}) and (max-width: calc(${vars.breakpoints.tablet} - 1px)) 300px,
          (min-width: ${vars.breakpoints.tablet}) and (max-width: calc(${vars.breakpoints.desktop} - 1px)) 768px,
          1280px
        `}
      src={image1x.mobile}
      alt={alt}
    />
  );
};

export default ImageItem;
