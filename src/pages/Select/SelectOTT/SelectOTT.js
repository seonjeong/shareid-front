import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import { Button } from '../../../components/Button';
import OTTCard from './SelectOTT.style';

const SelectOTT = () => {
  const navigate = useNavigate();

  const [otts, setOtts] = useState({
    netflix: { id: 'netflix', title: '넷플릭스' },
    youtube: { id: 'youtube', title: '유투브' },
  });
  return (
    <Container>
      <Row>
        {Object.entries(otts).map(([ott, ottData]) => {
          return (
            <Col>
              <OTTCard>
                <OTTCard.Body>
                  <OTTCard.Title>{ottData.title}</OTTCard.Title>
                  <Button
                    variant='primary'
                    onClick={() => {
                      navigate({
                        pathname: '/select/date',
                        search: `ott=${ott}`,
                      });
                    }}
                  >
                    Go
                  </Button>
                </OTTCard.Body>
              </OTTCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SelectOTT;
