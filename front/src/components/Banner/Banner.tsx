import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import * as S from './Banner.styles';
import { useBanner } from './Banner.hook';
import ApiBoundary from '../ApiBoundary/ApiBoundary';

interface BannerProps {
  categoryId: string;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrow: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  centerPadding: string;
}

export default function Banner(props: BannerProps) {
  return (
    <ApiBoundary>
      <ApiComponent {...props} />
    </ApiBoundary>
  );
}

export function ApiComponent({ categoryId }: BannerProps) {
  const { banners } = useBanner(categoryId);

  const settings: SliderSettings = {
    dots: true,
    infinite: banners.length > 1,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: '0px',
  };

  return (
    <S.Container>
      <Slider {...settings}>
        {banners.map((banner) => {
          return (
            <S.SlideCard key={`${categoryId}_${banner.title}`}>
              {banner.isProgress && <S.ProgressTag>진행중</S.ProgressTag>}
              <img src={banner.imgUrl} />
              <S.CardTitleContainer>
                <S.CardTitle>{banner.title}</S.CardTitle>
                {banner.buttonActive && (
                  <S.ButtonContainer>
                    <Link to={banner.url}>Let's go!</Link>
                  </S.ButtonContainer>
                )}
              </S.CardTitleContainer>
              <S.CardContents>{banner.contents}</S.CardContents>
            </S.SlideCard>
          );
        })}
      </Slider>
    </S.Container>
  );
}
