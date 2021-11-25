import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Container,
  Alert,
  Card,
  ToggleButton,
  Form,
  ButtonGroup,
} from 'react-bootstrap';

import { Button } from '../../components/Button';

const SelectPay = () => {
  const navigate = useNavigate();

  const [selectedPay, setSelectedPay] = useState('pay-registered');
  return (
    <Container className='mt-5'>
      <Alert variant='info'>결제 수단을 선택해주세요</Alert>
      <Card>
        <Card.Body>
          <Card.Title>구매 상품</Card.Title>
          <Card.Text>넷플릭스 3일 이용권(AM 6:00 부터)</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>상품가격</Card.Title>
          <Card.Text style={{ textDecoration: 'line-through' }}>
            3000원
          </Card.Text>
          <Card.Text>2000원</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>결제 수단</Card.Title>
          <Card.Text>
            <ToggleButton
              id='pay-registered'
              type='radio'
              name='pay'
              value='pay-registered'
              checked={'pay-registered' === selectedPay}
            >
              등록된 결제 수단
            </ToggleButton>
            <ToggleButton
              id='pay-credit'
              type='radio'
              name='pay'
              value='pay-credit'
              checked={'pay-credit' === selectedPay}
            >
              신용카드
            </ToggleButton>
            <ToggleButton
              id='pay-phone'
              type='radio'
              name='pay'
              value='pay-phone'
              checked={'pay-phone' === selectedPay}
            >
              휴대폰 결제
            </ToggleButton>
            <ToggleButton
              id='pay-naver'
              type='radio'
              name='pay'
              value='pay-naver'
              checked={'pay-naver' === selectedPay}
            >
              네이버 페이
            </ToggleButton>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            <Form.Check
              id='accept-term'
              name='accept-term'
              label='이용 약관 동의'
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <ButtonGroup className='mt-3'>
        <Button
          onClick={() => {
            navigate({
              pathname: '/select-complete',
            });
          }}
        >
          구매하기
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default SelectPay;
