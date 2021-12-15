import * as S from './UIInput.styles';

const UIInput = ({
  value,
  placeholder,
  varient,
  size,
  onChange = () => {},
}) => {
  return (
    <S.UIInput>
      <S.Input
        varient={varient}
        size={size}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </S.UIInput>
  );
};

export default UIInput;
