import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

function SideMenu() {
  const [activeTag, setActiveTag] = useState(true);

  const handleClick = () => {
    setActiveTag(!activeTag);
  };

  return (
    <SideMenuBx>
      <Topic>서비스</Topic>
      <select>
        <option>메드업</option>
        <option>서비스 추가하기</option>
      </select>

      <Topic>광고 센터</Topic>
      <div>
        <Button isActive={activeTag === true} onClick={handleClick} customStyle={BtnStyle}>
          대시보드
        </Button>
      </div>
      <div>
        <Button isActive={activeTag === false} onClick={handleClick} customStyle={BtnStyle}>
          광고관리
        </Button>
      </div>
    </SideMenuBx>
  );
}

const BtnStyle = css`
  width: 100%;
`;

const Topic = styled.p`
  font-size: 12px;
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      font-weight: ${fontWeight.bold};
      color: ${colors.grayAD};
    `;
  }};
`;

const SideMenuBx = styled.div`
  width: 320px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
`;
export default SideMenu;
