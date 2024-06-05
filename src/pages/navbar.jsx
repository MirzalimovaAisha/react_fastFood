import React from "react";
import {
  ImgWrapper,
  Logo,
  NavbarContainer,
  NavbarMenu,
  NavbarSearch,
  SearchLeft,
  SearchRight,
} from "./style";
import logo from "../assets/logo.png";
import search from "../assets/search.svg";
import cart from "../assets/shopping_cart.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <ImgWrapper src={logo} />
        <div>Foo</div>
      </Logo>

      <NavbarMenu>
        <div>Home</div>
        <div>Menu</div>
        <div>Contcat</div>
        <div>Shop</div>
      </NavbarMenu>

      <NavbarSearch>
        <SearchLeft>
          <ImgWrapper src={search} />
          <div>Search</div>
        </SearchLeft>

        <SearchRight>
          <ImgWrapper src={cart} />
        </SearchRight>
      </NavbarSearch>
    </NavbarContainer>
  );
};

export default Navbar;
