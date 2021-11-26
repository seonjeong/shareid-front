import { Routes, Route } from 'react-router-dom';

import { SelectOTT } from './SelectOTT';
import { SelectDate } from './SelectDate';
import { SelectPay } from './SelectPay';
import { SelectComplete } from './SelectComplete';

const Select = () => {
  return (
    <Routes>
      <Route path='' exact element={<SelectOTT />} />
      <Route path='ott' exact element={<SelectOTT />} />
      <Route path='date' exact element={<SelectDate />} />
      <Route path='pay' exact element={<SelectPay />} />
      <Route path='complete' exact element={<SelectComplete />} />
    </Routes>
  );
};

export { Select };
