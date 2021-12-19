const express = require('express');

const app = express();

const cors = require('cors');

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get('/oauth', (req, res) => {
  const REST_API_KEY = '653b940d39cdebd8aaef6b3f571d36ca';

  const data = {
    code: req.query.code,
    client_id: REST_API_KEY,
    grant_type: 'authorization_code',
    redirect_uri: 'http://localhost:3000/oauth',
    client_secret: 'M8BYaqFLN4feqHqxz2rwnzPIRniMxQdQ',
  };

  let formBody = [];
  for (let property in data) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  import('node-fetch').then(({ default: fetch }) => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //   mode: 'cors', // no-cors, cors, *same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   //   credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then((res) => {
        return res.json();
      })
      .then(({ access_token, refresh_token }) => {
        res.send({
          access_token,
          refresh_token,
        });
      });
  });
});

app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:${3001}`);
});
