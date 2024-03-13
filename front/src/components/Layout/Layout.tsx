import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import * as S from './Layout.styles';

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
