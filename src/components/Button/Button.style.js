import styled from 'styled-components';
import * as BootStrap from 'react-bootstrap';

export const Button = styled(BootStrap.Button)`
  border-radius: 30px;
  width: 100%;
  &:hover {
    box-shadow: 0 5px #333;
  }
`;
