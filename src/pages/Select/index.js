import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import moment from 'moment';

import { SelectOTT } from './SelectOTT';
import { SelectDate } from './SelectDate';
import { SelectPay } from './SelectPay';
import { SelectComplete } from './SelectComplete';

const initState = {
  currentOtt: 'netflix',
  currentDays: 1,
  currentDate: moment().format('YYYY-MM-DD'),
  currentTime: 'am',
  selectedPay: 'pay-credit',
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const Select = () => {
  const [currentOtt, setCurrentOtt] = useState('netflix');
  const [currentDays, setCurrentDays] = useState(1);
  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));
  const [currentTime, setCurrentTime] = useState('am');
  const [selectedPay, setSelectedPay] = useState('pay-credit');

  const [state, dispatch] = useReducer(reducer, initState);

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
