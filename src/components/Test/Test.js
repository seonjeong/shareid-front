import * as S from './Test.styles';

const Test = ({ onClick, test }) => {
  return (
    <S.Test
      onClick={() => {
        onClick(test);
      }}
    >
      Hello Test {test}
    </S.Test>
  );
};

export default Test;
