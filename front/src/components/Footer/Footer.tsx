import * as S from './Footer.styles';
import { FaArrowUp } from 'react-icons/fa6';

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Container>
      <S.TopButton onClick={scrollTop}>
        <FaArrowUp />
      </S.TopButton>
      <p>맨 위로 가기🚀</p>
    </S.Container>
  );
}
