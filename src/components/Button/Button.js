import * as BootStrap from 'react-bootstrap';
import styled from 'styled-components';

const Default = styled(BootStrap.Button)`
  border-radius: 30px;
  width: 100%;
  &:hover {
    box-shadow: 0 5px #333;
  }
`;

export default Default;
