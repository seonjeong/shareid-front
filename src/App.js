import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Select } from './pages/Select';
import { Login } from './pages/Login';
import { Oauth } from './pages/Oauth';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/*' exact element={<Select />} />
          <Route path='/select/*' exact element={<Select />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/oauth' exact element={<Oauth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
