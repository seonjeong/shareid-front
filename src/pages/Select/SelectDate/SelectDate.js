import { useNavigate } from 'react-router';

import { Container, Alert, Card, Form, ButtonGroup } from 'react-bootstrap';

import { Button } from '../../../components/Button';

const SelectDate = () => {
  const navigate = useNavigate();
  return (
    <Container className='mt-5'>
      <Alert variant='info'>서비스 기간을 선택하세요</Alert>
      <Card>
        <Card.Body>
          <Card.Title>이용권을 선택해주세요</Card.Title>
          <Card.Text>
            <Form.Check type={'radio'} id={`days${1}`} label={`1일권`} />
            <Form.Check type={'radio'} id={`days${3}`} label={`3일권`} />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>시작하실 날짜를 선택해주세요</Card.Title>
          <Card.Text>
            <Form.Control type='date' id='start-date' />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>선택한 날짜에 시작할 시간을 선택해주세요</Card.Title>
          <Card.Text>
            <Form.Check type={'radio'} id={`time${'am'}`} label={`AM 6:00`} />
            <Form.Check type={'radio'} id={`days${'pm'}`} label={`PM 6:00`} />
          </Card.Text>
        </Card.Body>
      </Card>
      <ButtonGroup className='mt-3'>
        <Button
          onClick={() => {
            navigate({
              pathname: '/select/pay',
            });
          }}
        >
          Go
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default SelectDate;
