import styled from 'styled-components';

import * as BS from 'react-bootstrap';

const Button = styled(BS.Button)`
  border: 1px solid red;
`;

const App = () => {
  return (
    <div className='App'>
      <Button variant='secondary'>Hello world</Button>
    </div>
  );
};

export default App;
