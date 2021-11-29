import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SelectOTT } from './SelectOTT';
import { SelectDate } from './SelectDate';
import { SelectPay } from './SelectPay';
import { SelectComplete } from './SelectComplete';

const getToday = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = ('0' + (1 + date.getMonth())).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
};

const Select = () => {
  const [currentOtt, setCurrentOtt] = useState('netflix');
  const [currentDays, setCurrentDays] = useState(1);
  const [currentDate, setCurrentDate] = useState(getToday());
  const [currentTime, setCurrentTime] = useState('am');
  const [selectedPay, setSelectedPay] = useState('pay-credit');

  return (
    <Routes>
      <Route path='' exact element={<SelectOTT currentOtt={currentOtt} setCurrentOtt={setCurrentOtt} />} />
      <Route path='ott' exact element={<SelectOTT currentOtt={currentOtt} setCurrentOtt={setCurrentOtt} />} />
      <Route path='date' exact element={
        <SelectDate 
          currentOtt={currentOtt}
          currentDays={currentDays} setCurrentDays={setCurrentDays} 
          currentDate={currentDate} setCurrentDate={setCurrentDate} 
          currentTime={currentTime} setCurrentTime={setCurrentTime} 
        />
      } />
      <Route path='pay' exact element={
        <SelectPay 
          currentOtt={currentOtt}
          currentDays={currentDays}
          currentDate={currentDate}
          currentTime={currentTime}
          selectedPay={selectedPay} setSelectedPay={setSelectedPay}
        />
      } />
      <Route path='complete' exact element={
        <SelectComplete 
          currentOtt={currentOtt}
          currentDays={currentDays}
          currentDate={currentDate}
          currentTime={currentTime}
          selectedPay={selectedPay}
        />
      } />
    </Routes>
  );
};

export { Select };
