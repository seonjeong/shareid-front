import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

import moment from 'moment';

import { Container, Alert, Card, Form, ButtonGroup } from 'react-bootstrap';

import { Button } from '../../../components/Button';

import { ottService } from '../_data';

const SelectDate = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  if (!state) {
    navigate({
      pathname: '/select/ott',
    });

    return null;
  }

  const { currentOtt, currentDays, currentDate, currentTime } = state;

  return (
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
                  navigate(
                    {
                      pathname: '/select/date',
                    },
                    {
                      replace: true,
                      state: {
                        ...state,
                        currentDays: 1,
                      },
                    }
                  );
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
                  navigate(
                    {
                      pathname: '/select/date',
                    },
                    {
                      replace: true,
                      state: {
                        ...state,
                        currentDays: 3,
                      },
                    }
                  );
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
              defaultValue={moment().format('YYYY-MM-DD')}
              onChange={(e) => {
                navigate(
                  {
                    pathname: '/select/date',
                  },
                  {
                    replace: true,
                    state: {
                      ...state,
                      currentDate: e.target.value,
                    },
                  }
                );
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
                  navigate(
                    {
                      pathname: '/select/date',
                    },
                    {
                      replace: true,
                      state: {
                        ...state,
                        currentTime: 'am',
                      },
                    }
                  );
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
                  navigate(
                    {
                      pathname: '/select/date',
                    },
                    {
                      replace: true,
                      state: {
                        ...state,
                        currentTime: 'pm',
                      },
                    }
                  );
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
            navigate(
              {
                pathname: '/select/pay',
              },
              {
                state: {
                  currentOtt,
                  currentDays,
                  currentDate,
                  currentTime,
                },
              }
            );
          }}
        >
          Go
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default SelectDate;
