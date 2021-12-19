import { useNavigate } from 'react-router';

import { Button } from '../../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const REST_API_KEY = '653b940d39cdebd8aaef6b3f571d36ca';
  const REDIRECT_URI = 'http://localhost:3000/oauth';
  return (
    <>
      <Button
        onClick={() => {
          window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        }}
      >
        카카오톡으로 로그인하기
      </Button>
    </>
  );
};

export { Login };
