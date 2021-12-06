import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import moment from 'moment';

import { SelectOTT } from './SelectOTT';
import { SelectDate } from './SelectDate';
import { SelectPay } from './SelectPay';
import { SelectComplete } from './SelectComplete';

const Select = () => {
  const [currentOtt, setCurrentOtt] = useState(null);
  const [currentDays, setCurrentDays] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [selectedPay, setSelectedPay] = useState(null);

  return (
    <Routes>
      <Route
        path=''
        exact
        element={
          <SelectOTT currentOtt={currentOtt} setCurrentOtt={setCurrentOtt} />
        }
      />
      <Route
        path='ott'
        exact
        element={
          <SelectOTT currentOtt={currentOtt} setCurrentOtt={setCurrentOtt} />
        }
      />
      <Route
        path='date'
        exact
        element={
          <SelectDate
            currentOtt={currentOtt}
            currentDays={currentDays}
            setCurrentDays={setCurrentDays}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
        }
      />
      <Route
        path='pay'
        exact
        element={
          <SelectPay
            currentOtt={currentOtt}
            currentDays={currentDays}
            currentDate={currentDate}
            currentTime={currentTime}
            selectedPay={selectedPay}
            setSelectedPay={setSelectedPay}
          />
        }
      />
      <Route
        path='complete'
        exact
        element={
          <SelectComplete
            currentOtt={currentOtt}
            currentDays={currentDays}
            currentDate={currentDate}
            currentTime={currentTime}
            selectedPay={selectedPay}
          />
        }
      />
    </Routes>
  );
};

export { Select };
