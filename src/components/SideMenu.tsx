import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import logo from '../assets/images/logo.png';

function SideMenu() {
  const [activeTag, setActiveTag] = useState(true);

  const handleClick = () => {
    setActiveTag(!activeTag);
  };

  return (
    <SideMenuBx>
      <LogoWape>
        <div className="logoInner">
          <img src={logo} alt="로고" />
        </div>
      </LogoWape>

      <ServiceWape>
        <Topic>서비스</Topic>
        <select>
          <option>메드업</option>
          <option>서비스 추가하기</option>
        </select>
        <span className="icoArrow">
          <i className="ic-down" />
        </span>
      </ServiceWape>

      <AdWape>
        <Topic>광고 센터</Topic>
        <div>
          <Button menuIcon="ic-menu01" isActive={activeTag} onClick={handleClick} customStyle={BtnStyle}>
            대시보드
          </Button>
        </div>
        <div>
          <Button menuIcon="ic-menu02" isActive={!activeTag} onClick={handleClick} customStyle={BtnStyle}>
            광고관리
          </Button>
        </div>
      </AdWape>
    </SideMenuBx>
  );
}

const BtnStyle = css`
  width: 100%;
  padding-left: 30px;
  text-align: left;
`;

const SideMenuBx = styled.div`
  width: 320px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
  padding: 0 40px;
  box-sizing: border-box;
  position: fixed;
`;

const LogoWape = styled.div`
  .logoInner {
    width: 124px;
    padding: 60px 0;
  }
  .logoInner img {
    width: 100%;
  }
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border-bottom: 1px solid ${colors.grayF1};
    `;
  }}
`;

const ServiceWape = styled.div`
  margin-top: 40px;
  position: relative;
  select {
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    appearance: none;

    ${({ theme }) => {
      const { fontWeight, colors } = theme;
      return css`
        font-weight: ${fontWeight.bold};
        color: ${colors.gray4E};
        border: 1px solid ${colors.grayDC};
      `;
    }};
  }
  .icoArrow {
    font-size: 24px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, 20%);
  }
`;
const Topic = styled.p`
  font-size: 12px;
  padding: 13px 0 13px 20px;
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      font-weight: ${fontWeight.bold};
      color: ${colors.grayAD};
    `;
  }};
`;

const AdWape = styled.div`
  margin-top: 40px;
`;

export default SideMenu;
