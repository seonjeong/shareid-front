import { useNavigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import { Button } from '../../../components/Button';
import OTTCard from './SelectOTT.style';

import { ottService } from '../_data';

const SelectOTT = ({ setCurrentOtt }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        {Object.entries(ottService).map(([ott, ottData]) => {
          return (
            <Col>
              <OTTCard>
                <OTTCard.Body>
                  <OTTCard.Title>{ottData.title}</OTTCard.Title>
                  <Button
                    variant='primary'
                    onClick={() => {
                      setCurrentOtt(ott);
                      navigate(
                        {
                          pathname: '/select/date',
                        },
                        {
                          state: { currentOtt: ott },
                        }
                      );
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
