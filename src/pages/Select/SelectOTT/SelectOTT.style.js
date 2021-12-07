import styled from 'styled-components';

import * as BootStrap from 'react-bootstrap';

const OTTCard = styled(BootStrap.Card)`
  margin-top: 50px;
  background: #f0f0f0;
`;
const Body = styled(BootStrap.Card.Body)`
  background: red;
`;
const Title = styled(BootStrap.Card.Title)`
  background: red;
`;

export default OTTCard;

export { Title, Body };
