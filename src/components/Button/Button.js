import styled from 'styled-components';

import * as S from './Button.style';

const Button = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
