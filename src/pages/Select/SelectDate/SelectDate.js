import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

import moment from 'moment';

import { SelectContext } from '../index';

import { Container, Alert, Card, Form, ButtonGroup } from 'react-bootstrap';

import { Button } from '../../../components/Button';

import { ottService } from '../_data';
import { useContext } from 'react';

const SelectDate = () => {
  const navigate = useNavigate();

  const { selectData, dispatch } = useContext(SelectContext);

  const { currentOtt, currentDays, currentDate, currentTime } = selectData;

  const isProcessed = (...condition) => {
    return condition.every((item) => item);
  };

  useEffect(() => {
    if (!isProcessed(currentOtt)) {
      navigate({
        pathname: '/select/ott',
      });
    }
  }, []);

  return (
    isProcessed(currentOtt) && (
      <Container className='mt-5'>
        <Alert variant='info'>
          서비스 {ottService[currentOtt].title} 기간을 선택하세요
        </Alert>
        <Card>
          <Card.Body>
            <Card.Title>이용권을 선택해주세요</Card.Title>
            <Card.Text>
              <Form.Check
                type={'radio'}
                id={`days${1}`}
                value={`days${1}`}
                label={`1일권`}
                checked={currentDays ? currentDays === 1 : true}
                onChange={(e) => {
                  if (e.target.checked) {
                    dispatch({ type: 'SelectDays', days: 1 });
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
                    dispatch({ type: 'SelectDays', days: 3 });
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
                value={
                  currentDate ? currentDate : moment().format('YYYY-MM-DD')
                }
                onChange={(e) => {
                  dispatch({ type: 'SelectDate', date: e.target.value });
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
                checked={currentTime ? currentTime === 'am' : true}
                onChange={(e) => {
                  if (e.target.checked) {
                    dispatch({ type: 'SelectTime', time: 'am' });
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
                    dispatch({ type: 'SelectTime', time: 'pm' });
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
              if (!currentDays) {
                dispatch({ type: 'SelectDays', days: 1 });
              }
              if (!currentDate) {
                dispatch({
                  type: 'SelectDate',
                  date: moment().format('YYYY-MM-DD'),
                });
              }
              if (!currentTime) {
                dispatch({ type: 'SelectTime', time: 'pm' });
              }

              navigate({
                pathname: '/select/pay',
              });
            }}
          >
            Go
          </Button>
        </ButtonGroup>
      </Container>
    )
  );
};

export default SelectDate;
