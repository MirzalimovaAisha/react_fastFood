import React from "react";
import {
  BlackButton,
  HeaderButtons,
  HeaderContainer,
  HeaderPause,
  HeaderSubTitle,
  HeaderTextBlack,
  HeaderTexts,
  HeaderTexts2,
  HeaderTitle,
  HeaderTitleBlack,
  HeaderTitleOrange,
  ImgWrapper,
} from "./style";
import pause from "../assets/pause.png";
import stars from "../assets/headerStars.png";
import headerImg from "../assets/header_Img.png";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <HeaderTexts>
          <div>
            <HeaderTitle>
              <HeaderTitleOrange>Fast</HeaderTitleOrange>
              <HeaderTitleBlack>Food Delivery</HeaderTitleBlack>
            </HeaderTitle>
            <HeaderSubTitle>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium
            </HeaderSubTitle>
          </div>

          <HeaderButtons>
            <BlackButton>Order Now</BlackButton>
            <HeaderPause>
              <ImgWrapper src={pause} style={{marginTop:"40px"}}/>
              <div>Watch Video</div>
            </HeaderPause>
          </HeaderButtons>
        </HeaderTexts>
        <HeaderTexts2>
          <ImgWrapper src={stars} />
          <HeaderTextBlack>5 star rating</HeaderTextBlack>
          <div>based on 1788 reviews</div>
        </HeaderTexts2>
      </div>
      <div>
        <ImgWrapper src={headerImg} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
