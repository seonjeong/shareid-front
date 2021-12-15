import { useState, useEffect, useRef } from 'react';

import * as S from './UISelect.styles';

const UISelect = ({ value: _value, options, onChange = () => {} }) => {
  const $wrapper = useRef();
  const [value, setValue] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const close = (e) => {
    if (!$wrapper) return;
    if (!$wrapper.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const getText = (value) => {
    const option = options.find((item) => item.value == value) || {};
    return option.text;
  };

  useEffect(() => {
    document.addEventListener('click', close);

    return () => {
      document.removeEventListener('click', close);
    };
  }, []);

  useEffect(() => {
    setValue(_value);
  }, [_value]);

  return (
    <S.UISelect ref={$wrapper}>
      <S.Select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      >
        {options.map(({ text, value }) => {
          return <option value={value}>{text}</option>;
        })}
      </S.Select>
      <S.SelectBox
        on={isOpen}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        {getText(value)}
      </S.SelectBox>
      <S.Container on={isOpen}>
        <S.List>
          {options.map(({ text, value: optionValue }) => {
            return (
              <S.Item>
                <S.A
                  on={optionValue === value}
                  onClick={() => {
                    setValue(optionValue);
                    onChange(optionValue);
                    setIsOpen(false);
                  }}
                >
                  {text}
                </S.A>
              </S.Item>
            );
          })}
        </S.List>
      </S.Container>
    </S.UISelect>
  );
};

export default UISelect;
