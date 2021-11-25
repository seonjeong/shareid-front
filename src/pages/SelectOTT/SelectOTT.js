import { useNavigate } from 'react-router-dom';

import OTTCard from './SelectOTT.style';
import { Button } from '../../components/Button';
import { Container, Row, Col } from 'react-bootstrap';

const SelectOTT = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <OTTCard>
            <OTTCard.Body>
              <OTTCard.Title>Netflix</OTTCard.Title>
              <Button
                variant='primary'
                onClick={() => {
                  navigate({
                    pathname: 'select-date',
                    search: 'ott=netflix',
                  });
                }}
              >
                Go
              </Button>
            </OTTCard.Body>
          </OTTCard>
        </Col>
        <Col>
          <OTTCard>
            <OTTCard.Body>
              <OTTCard.Title>Youtube</OTTCard.Title>
              <Button
                variant='primary'
                onClick={() => {
                  navigate({
                    pathname: 'select-date',
                    search: 'ott=youtoube',
                  });
                }}
              >
                Go
              </Button>
            </OTTCard.Body>
          </OTTCard>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectOTT;
