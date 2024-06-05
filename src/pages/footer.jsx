import React from "react";
import {
  FooterBottom,
  FooterBottomLeft,
  FooterCenter,
  FooterCenterItems,
  FooterCenterTitle,
  FooterContainer,
  FooterSearch,
  ImgWrapper,
  Line,
  SearchInput,
} from "./style";
import footerLogo from "../assets/footer_logo.svg";
import submit from "../assets/Submit.svg";
import social from "../assets/Social.svg"

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          <ImgWrapper src={footerLogo} />
        </div>
        <Line></Line>

        <FooterCenter>
          <FooterCenterItems>
            <FooterCenterTitle>
              Subscribe to our <br /> newsletter
            </FooterCenterTitle>

            <FooterSearch>
              <SearchInput>Email address</SearchInput>
              <ImgWrapper src={submit} />
            </FooterSearch>
          </FooterCenterItems>

          <FooterCenterItems>
            <div>Services</div>
            <div>Email Marketing</div>
            <div>Campaigns</div>
            <div>Branding</div>
            <div>Offline</div>
          </FooterCenterItems>

          <FooterCenterItems>
            <div>About</div>
            <div>Our Story</div>
            <div>Benefits</div>
            <div>Team</div>
            <div>Careers</div>
          </FooterCenterItems>

          <FooterCenterItems>
            <div>Help</div>
            <div>FAQs</div>
            <div>Contact Us</div>
          </FooterCenterItems>
        </FooterCenter>

        <FooterBottom>
          <FooterBottomLeft>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </FooterBottomLeft>
          <div>
            <ImgWrapper src={social}/>
          </div>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer;
