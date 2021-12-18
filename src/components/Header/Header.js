import * as S from './Header.styled';

const Header = ({ children }) => {
  return (
    <S.Header>
      <S.BtnHome>Home</S.BtnHome>
      <S.Logo>logo</S.Logo>
    </S.Header>
  );
};

export default Header;
