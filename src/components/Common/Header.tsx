import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <HeaderBox>
      <HeaderContent>
        <Logo to={'/'}>amonds</Logo>
        <Nav>
          <StyledLink to={'/'}>상품 목록</StyledLink>
          <StyledLink to={'/enroll'}>상품등록</StyledLink>
        </Nav>
      </HeaderContent>
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.header`
  display: block;
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 2;
  width: 100%;
  box-shadow: rgb(237 237 237) 0px 1px 0px 0px;
  background-color: rgb(255, 255, 255);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  max-width: 1980px;
  height: 73px;
  margin: auto;

  @media screen and (max-width: 768px) {
    & {
      padding: 0 20px;
    }
  }
`;

const Logo = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  color: black;
  text-decoration: none;
`;

const Nav = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(NavLink)<{
  isActive?: boolean;
}>`
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: -0.5px;
  color: #9b9b9b;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: black;
  }

  &.active {
    color: black;
  }
`;
