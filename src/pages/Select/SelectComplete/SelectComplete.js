import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Container, Alert, Card, ButtonGroup } from 'react-bootstrap';

import { Button } from '../../../components/Button';

import { ottService } from '../_data';

const SelectComplete = () => {

  const [searchQuery, setSearchQuery] = useSearchParams({});

  const {current: ott} = useRef(searchQuery.get('ott'));
  const {current: days} = useRef(searchQuery.get('days'));
  const {current: date} = useRef(searchQuery.get('date'));
  const {current: time} = useRef(searchQuery.get('time'));
  
  return (
    <Container className='mt-5'>
      <Alert variant='info'>
        구매가 완료 되었습니다. 즐거운 시간 보내세요!
      </Alert>
      <Card>
        <Card.Body>
          <Card.Title>신청한 서비스</Card.Title>
          <Card.Text>{ottService[ott].title}</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>이용 기간</Card.Title>
          <Card.Text>
            {date} {time.toLocaleUpperCase()} 6:00 ~ {date} {time.toLocaleUpperCase()} 6:00
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>결제 금액</Card.Title>
          <Card.Text>
            {ottService[ott].pays[`day${days}`].pay - ottService[ott].pays[`day${days}`].sale}원
            {ottService[ott].pays[`day${days}`].sale ? `(총 ${ottService[ott].pays[`day${days}`].sale }원 할인 받았어요)` : ''}
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
  );
};

export default SelectComplete;
