import * as S from './NotFoundPage.styles';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <S.Container>
      NOT FOUND
      <br />
      <br />
      존재하지 않는 링크 접근입니다.
      <button onClick={() => navigate(`/`)}>메인 페이지로 돌아가기</button>
    </S.Container>
  );
}
