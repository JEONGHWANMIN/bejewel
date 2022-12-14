import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderBox>
      <HeaderContent>
        <Logo>Amonds</Logo>
        <Menu></Menu>
      </HeaderContent>
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 90;
  width: 100%;
  box-shadow: rgb(237 237 237) 0px 1px 0px 0px;
  background-color: rgb(255, 255, 255);
`;

const Logo = styled.div`
  font-size: 30px;
`;
const Menu = styled.nav``;

const HeaderContent = styled.div`
  max-width: 1980px;
  height: 73px;
`;
