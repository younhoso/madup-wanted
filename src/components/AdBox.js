import styled, { css } from 'styled-components';
import { useDatas } from '../context/MadupContext';

function AdBox() {
  const { datas } = useDatas();

  return (
    <AdBoxWape>
      {datas.data?.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </AdBoxWape>
  );
}

const AdBoxWape = styled.div`
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      border: 1px solid ${colors.grayF1};
    `;
  }};
`;

export default AdBox;
