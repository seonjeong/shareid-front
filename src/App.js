import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Select } from './pages/Select';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/*' exact element={<Select />} />
          <Route path='/select/*' exact element={<Select />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
