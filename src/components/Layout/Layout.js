import * as S from './Layout.styled';

import { Header } from 'components/Header';

const Layout = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
    </S.Layout>
  );
};

export default Layout;
