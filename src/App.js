import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { SelectOTT } from './pages/Select/SelectOTT';
import { SelectDate } from './pages/Select/SelectDate';
import { SelectPay } from './pages/Select/SelectPay';
import { SelectComplete } from './pages/Select/SelectComplete';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<SelectOTT />} />
          <Route path='/select' exact element={<SelectOTT />} />
          <Route path='/select/ott' exact element={<SelectOTT />} />
          <Route path='/select/date' exact element={<SelectDate />} />
          <Route path='/select/pay' exact element={<SelectPay />} />
          <Route path='/select/complete' exact element={<SelectComplete />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
