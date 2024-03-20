// import React, { useRef } from 'react';

// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// import { ReactComponent as ArrowIcon } from '../../icons/arrow-top-right.svg';

// import * as s from './MindMapSlider.styled';

// const MindMapSlider = () => {
//   const swiperRef = useRef(null);

//   const goNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const goPrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };
//   return (
//     <>
//       <s.Slider
//         ref={swiperRef}
//         navigation={{
//           prevEl: '.swiper-button-prev',
//           nextEl: '.swiper-button-next',
//         }}
//         modules={[Navigation]}
//         slidesPerView={1}
//         centeredSlidesBounds={true}
//       >
//         <s.Item>
//           <s.ItemDescription>
//             All owners of APE NFTs and all future collections will receive a
//             percentage of sales based on the number of NFTs they own
//           </s.ItemDescription>
//           <s.ItemTitle>YAPE DROP</s.ItemTitle>
//         </s.Item>
//         <s.Item>
//           <s.ItemDescription>
//             Launch of the 2nd YACHT Collection Releasing the first version of
//             the Ape Slam Game
//           </s.ItemDescription>
//           <s.ItemTitle>New Collection</s.ItemTitle>
//         </s.Item>
//         <s.Item>
//           <s.ItemDescription>
//             Launch your own token, the proceeds of which will go to a global
//             fund to LAUNCH YACHT CLUB AND PROMOTE it
//           </s.ItemDescription>
//           <s.ItemTitle>Token</s.ItemTitle>
//         </s.Item>
//         <s.ItemRed>
//           <s.ArrowIconLink href="https://www.binance.com/uk-UA">
//             <ArrowIcon />
//           </s.ArrowIconLink>
//           <s.ItemTitle>Learn more in mind map</s.ItemTitle>
//         </s.ItemRed>
//       </s.Slider>
//       <s.SliderButtonContainer>
//         <s.SliderButton onClick={goPrev}>Prev</s.SliderButton>
//         <s.SliderButton onClick={goNext}>Next</s.SliderButton>
//       </s.SliderButtonContainer>
//     </>
//   );
// };

// export default MindMapSlider;
