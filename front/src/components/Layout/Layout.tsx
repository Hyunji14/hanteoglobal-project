import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as S from './Layout.styles';

export default function Layout() {
  return (
    <>
      <S.Container>
        <Header />
        <Outlet />
        <Footer />
      </S.Container>
    </>
  );
}
