import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';

type ButtonProps = {
  children?: string;
  isActive?: boolean;
  onClick: () => void;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
};

function Button({ isActive = false, customStyle, children, onClick }: ButtonProps) {
  return (
    <ButtonBx isActive={isActive} customStyle={customStyle} onClick={onClick}>
      {children}
    </ButtonBx>
  );
}

const ButtonBx = styled.button<ButtonProps>`
  ${(props) => props.customStyle}
  height: 60px;
  font-size: 16px;
  border-radius: 10px;

  ${({ theme, isActive }) => {
    const { fontWeight, colors } = theme;
    return css`
       {
        font-weight: ${fontWeight.bold};
        background-color: ${isActive ? colors.grayF1 : colors.white};
        color: ${isActive ? colors.blueF5 : colors.gray4E};
      }
    `;
  }}
`;

export default Button;
