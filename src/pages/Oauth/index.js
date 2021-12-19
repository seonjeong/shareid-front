import { useEffect } from 'react';

const Oauth = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    fetch(`http://localhost:3001/oauth?code=${code}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
  return <div>Hello world</div>;
};

export { Oauth };
