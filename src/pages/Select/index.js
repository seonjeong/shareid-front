import { useState, useReducer, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import moment from 'moment';

import { SelectOTT } from './SelectOTT';
import { SelectDate } from './SelectDate';
import { SelectPay } from './SelectPay';
import { SelectComplete } from './SelectComplete';

const initState = {
  currentOtt: null,
  currentDays: null,
  currentDate: null,
  currentTime: null,
  selectedPay: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SelectOTT':
      return {
        ...state,
        currentOtt: action.ott,
      };
    case 'SelectDays':
      return {
        ...state,
        currentDays: action.days,
      };
    case 'SelectDate':
      return {
        ...state,
        currentDate: action.date,
      };
    case 'SelectTime':
      return {
        ...state,
        currentTime: action.time,
      };
    case 'SelectPay':
      return {
        ...state,
        selectedPay: action.pay,
      };
    default:
      return state;
  }
};

export const SelectContext = createContext({
  selectData: {},
  dispatch: () => {},
});

const Select = () => {
  const [currentOtt, setCurrentOtt] = useState('netflix');
  const [currentDays, setCurrentDays] = useState(1);
  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));
  const [currentTime, setCurrentTime] = useState('am');
  const [selectedPay, setSelectedPay] = useState('pay-credit');

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <SelectContext.Provider value={{ selectData: state, dispatch }}>
      <Routes>
        <Route path='' exact element={<SelectOTT />} />
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
    </SelectContext.Provider>
  );
};

export { Select };
