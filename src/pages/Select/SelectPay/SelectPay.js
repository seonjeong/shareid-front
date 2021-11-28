import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import qs from 'query-string';

import { useNavigate } from 'react-router';
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

const SelectPay = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useSearchParams();

  const [selectedPay, setSelectedPay] = useState('pay-registered');
  return (
    <Container className='mt-5'>
      <Alert variant='info'>결제 수단을 선택해주세요</Alert>
      <Card>
        <Card.Body>
          <Card.Title>구매 상품</Card.Title>
          <Card.Text>
            {ottService[searchQuery.get('ott')].title}
            {searchQuery.get('days')}일 이용권(
            {searchQuery.get('date')} {` `}
            {searchQuery.get('time').toLocaleUpperCase()} 6:00 부터)
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>상품가격</Card.Title>

          {ottService[searchQuery.get('ott')].pays[
            `day${searchQuery.get('days')}`
          ].sale > 0 && (
            <Card.Text style={{ textDecoration: 'line-through' }}>
              {
                ottService[searchQuery.get('ott')].pays[
                  `day${searchQuery.get('days')}`
                ].pay
              }
              원
            </Card.Text>
          )}

          <Card.Text>
            {ottService[searchQuery.get('ott')].pays[
              `day${searchQuery.get('days')}`
            ].pay -
              ottService[searchQuery.get('ott')].pays[
                `day${searchQuery.get('days')}`
              ].sale}
            원
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
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <ButtonGroup className='mt-3'>
        <Button
          onClick={() => {
            const search = Object.fromEntries([...searchQuery]);

            const data = {
              ...search,
              pay: selectedPay,
            };

            const querystring = qs.stringify(data);
            navigate({
              pathname: '/select/complete',
              search: querystring,
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
