import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import moment from 'moment';

import {
  Container,
  Alert,
  Card,
  ToggleButton,
  Form,
  ButtonGroup,
} from 'react-bootstrap';

import { Button } from '../../../components/Button';

import { ottService } from '../_data';

const SelectPay = ({currentOtt, currentDays, currentDate, currentTime, selectedPay, setSelectedPay}) => {
  const navigate = useNavigate();

  const $acceptTerm = useRef();
  
  const [acceptTerm, setAcceptTerm] = useState(false);

  return (
    <Container className='mt-5'>
      <Alert variant='info'>결제 수단을 선택해주세요</Alert>
      <Card>
        <Card.Body>
          <Card.Title>구매 상품</Card.Title>
          <Card.Text>
            {ottService[currentOtt].title}
            {currentDays}일 이용권(
            {currentDate} {` `}
            {currentTime.toLocaleUpperCase()} 6:00 부터)
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>상품가격</Card.Title>

          {ottService[currentOtt].pays[`day${currentDays}`].sale > 0 && (
            <Card.Text style={{ textDecoration: 'line-through' }}>
              {ottService[currentOtt].pays[`day${currentDays}`].pay}원
            </Card.Text>
          )}
          <Card.Text>
            {ottService[currentOtt].pays[`day${currentDays}`].pay -ottService[currentOtt].pays[`day${currentDays}`].sale}원
          </Card.Text>
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
              onChange={() => {
                setSelectedPay('pay-registered');
              }}
            >
              등록된 결제 수단
            </ToggleButton>
            <ToggleButton
              id='pay-credit'
              type='radio'
              name='pay'
              value='pay-credit'
              checked={'pay-credit' === selectedPay}
              onChange={() => {
                setSelectedPay('pay-credit');
              }}
            >
              신용카드
            </ToggleButton>
            <ToggleButton
              id='pay-phone'
              type='radio'
              name='pay'
              value='pay-phone'
              checked={'pay-phone' === selectedPay}
              onChange={() => {
                setSelectedPay('pay-phone');
              }}
            >
              휴대폰 결제
            </ToggleButton>
            <ToggleButton
              id='pay-naver'
              type='radio'
              name='pay'
              value='pay-naver'
              checked={'pay-naver' === selectedPay}
              onChange={() => {
                setSelectedPay('pay-naver');
              }}
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
              checked={acceptTerm}
              ref={$acceptTerm}
              onChange={(e) => {
                setAcceptTerm(e.target.checked);
              }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <ButtonGroup className='mt-3'>
        <Button
          onClick={() => {

            if(!acceptTerm) {
              alert('이용 약관에 동의하세요');
              $acceptTerm.current.focus();
              return;
            }
            
            navigate({
              pathname: '/select/complete',
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
