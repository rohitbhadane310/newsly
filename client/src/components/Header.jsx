import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";
import logo from "../img/logo.png";

const StyledHeader = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const MenuIcon = styled(Menu)`
  color: #000;
`;

const Image = styled(`img`)({
  height: "55px",
  margin: "auto",
  paddingRight: 70,
});

function Header() {
  return (
    <StyledHeader position="static">
      <Toolbar>
        <MenuIcon />
        <Image src={logo} alt="img" />
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;