import styled, { css } from 'styled-components';

// type AdBoxProps = {
// 	imp: number;
// 	cost: number;
// 	topic: string;
// }

function AdBox() {
  return (
    <AdBoxWape>
      <div>dddd</div>
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
