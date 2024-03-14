import { Outlet } from 'react-router-dom';
import * as S from './Layout.styles';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <>
      <S.Container>
        <Outlet />
        <Footer />
      </S.Container>
    </>
  );
}
