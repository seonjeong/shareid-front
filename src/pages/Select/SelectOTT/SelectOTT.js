import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { SelectContext } from '../index';

import { Container, Row, Col } from 'react-bootstrap';

import { Button } from '../../../components/Button';
import OTTCard, { Title } from './SelectOTT.style';

import { ottService } from '../_data';

const SelectOTT = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(SelectContext);

  return (
    <Container>
      <Row>
        {Object.entries(ottService).map(([ott, ottData]) => {
          return (
            <Col>
              <OTTCard>
                <OTTCard.Body>
                  <Title>{ottData.title}</Title>
                  <Button
                    variant='primary'
                    onClick={() => {
                      dispatch({ type: 'SelectOTT', ott });
                      navigate({
                        pathname: '/select/date',
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
