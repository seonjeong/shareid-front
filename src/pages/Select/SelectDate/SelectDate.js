import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import qs from 'query-string';

import { Container, Alert, Card, Form, ButtonGroup } from 'react-bootstrap';

import { Button } from '../../../components/Button';

const SelectDate = (props) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useSearchParams({});

  const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ('0' + (1 + date.getMonth())).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  };
  const [currentDays, setCurrentDays] = useState(1);
  const [currentDate, setCurrentDate] = useState(getToday());
  const [currentTime, setCurrentTime] = useState('am');

  return (
    <Container className='mt-5'>
      <Alert variant='info'>서비스 기간을 선택하세요</Alert>
      <Card>
        <Card.Body>
          <Card.Title>이용권을 선택해주세요</Card.Title>
          <Card.Text>
            <Form.Check
              type={'radio'}
              id={`days${1}`}
              value={`days${1}`}
              label={`1일권`}
              checked={currentDays === 1}
              onChange={(e) => {
                if (e.target.checked) {
                  setCurrentDays(1);
                }
              }}
            />
            <Form.Check
              type={'radio'}
              id={`days${3}`}
              value={`days${3}`}
              label={`3일권`}
              checked={currentDays === 3}
              onChange={(e) => {
                if (e.target.checked) {
                  setCurrentDays(3);
                }
              }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>시작하실 날짜를 선택해주세요</Card.Title>
          <Card.Text>
            <Form.Control
              type='date'
              id='start-date'
              value={currentDate}
              onChange={(e) => {
                setCurrentDate(e.target.value);
              }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>선택한 날짜에 시작할 시간을 선택해주세요</Card.Title>
          <Card.Text>
            <Form.Check
              type={'radio'}
              id={`time${'am'}`}
              value={`am`}
              checked={currentTime === 'am'}
              onChange={(e) => {
                if (e.target.checked) {
                  setCurrentTime('am');
                }
              }}
              label={`AM 6:00`}
            />
            <Form.Check
              type={'radio'}
              id={`time${'pm'}`}
              value={`pm`}
              checked={currentTime === 'pm'}
              onChange={(e) => {
                if (e.target.checked) {
                  setCurrentTime('pm');
                }
              }}
              label={`PM 6:00`}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <ButtonGroup className='mt-3'>
        <Button
          onClick={() => {
            const data = {
              ott: searchQuery.get('ott'),
              days: currentDays,
              date: currentDate,
              time: currentTime,
            };

            const querystring = qs.stringify(data);
            navigate({
              pathname: '/select/pay',
              search: querystring,
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
