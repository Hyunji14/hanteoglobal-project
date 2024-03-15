import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import * as S from './ApiErrorFallback.styles';

export default function ApiErrorFallback({
  resetErrorBoundary,
}: FallbackProps) {
  const navigate = useNavigate();

  return (
    <S.Container>
      잘못된 요청입니다
      <S.ButtonBox>
        <button onClick={() => resetErrorBoundary()}>재시도</button>
        <button onClick={() => navigate(`/`)}>메인으로</button>
      </S.ButtonBox>
    </S.Container>
  );
}
