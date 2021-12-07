import styled from 'styled-components';

import { Card } from 'react-bootstrap';

const OTTCard = styled(Card)`
  margin-top: 50px;
  background: #f0f0f0;
`;

const Title = styled(Card.Title)`
  background: red;
`;

export default OTTCard;

export { Title };
