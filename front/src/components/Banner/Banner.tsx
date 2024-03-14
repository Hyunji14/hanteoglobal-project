import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './Banner.styles';
import { useBanner } from './Banner.hook';
import { Link } from 'react-router-dom';

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

export default function Banner({ categoryId }: BannerProps) {
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
          {
            console.log(banners.length);
          }
          return (
            <S.SlideCard>
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
