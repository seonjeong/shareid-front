import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import moment from 'moment';

import { SelectContext } from '../index';

import { Container, Alert, Card, ButtonGroup } from 'react-bootstrap';

import { Button } from '../../../components/Button';

import { ottService } from '../_data';

const SelectComplete = () => {
  const navigate = useNavigate();

  const { selectData, dispatch } = useContext(SelectContext);
  const { currentOtt, currentDays, currentDate, currentTime, selectedPay } =
    selectData;

  const isProcessed = (...condition) => {
    return condition.every((item) => item);
  };

  useEffect(() => {
    if (
      !isProcessed(
        currentOtt,
        currentDays,
        currentDate,
        currentTime,
        selectedPay
      )
    ) {
      navigate({
        pathname: '/select/ott',
      });
    }
  }, []);

  return (
    isProcessed(
      currentOtt,
      currentDays,
      currentDate,
      currentTime,
      selectedPay
    ) && (
      <Container className='mt-5'>
        <Alert variant='info'>
          구매가 완료 되었습니다. 즐거운 시간 보내세요!
        </Alert>
        <Card>
          <Card.Body>
            <Card.Title>신청한 서비스</Card.Title>
            <Card.Text>{ottService[currentOtt].title}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>이용 기간</Card.Title>
            <Card.Text>
              {moment(currentDate).format('YYYY-MM-DD')}{' '}
              {currentTime.toLocaleUpperCase()} 6:00 ~{' '}
              {moment(currentDate)
                .add(currentDays, 'days')
                .format('YYYY-MM-DD')}{' '}
              {currentTime.toLocaleUpperCase()} 6:00
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>결제 금액</Card.Title>
            <Card.Text>
              {ottService[currentOtt].pays[`day${currentDays}`].pay -
                ottService[currentOtt].pays[`day${currentDays}`].sale}
              원
              {ottService[currentOtt].pays[`day${currentDays}`].sale
                ? `(총 ${
                    ottService[currentOtt].pays[`day${currentDays}`].sale
                  }원 할인 받았어요)`
                : ''}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>계정 정보 보러가기</Card.Title>
            <Card.Text>
              <Button variant='outline-primary' size='sm'>
                마이 페이지로 이동
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <ButtonGroup className='mt-3'>
          <Button>계정 정보 카톡으로 전송</Button>
        </ButtonGroup>
      </Container>
    )
  );
};

export default SelectComplete;
