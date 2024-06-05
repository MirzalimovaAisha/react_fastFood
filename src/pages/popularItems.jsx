import React from "react";
import { ImgWrapper, PopularBox, PopularContainer, SecSubTitle, SecTitle } from "./style";
import popularImg1 from "../assets/popular_img1.png";
import popularImg2 from "../assets/popular_img2.png";

const PopularItems = () => {
  return (
    <PopularContainer>
      <div>
        <SecTitle>Popular Items</SecTitle>
        <SecSubTitle>Most Ordered Items</SecSubTitle>

        <PopularBox>
          <ImgWrapper src={popularImg1}/>
          <ImgWrapper src={popularImg2}/>
          <ImgWrapper src={popularImg1}/>
          <ImgWrapper src={popularImg2}/>
          <ImgWrapper src={popularImg1}/>
          <ImgWrapper src={popularImg2}/>
          <ImgWrapper src={popularImg1}/>
          <ImgWrapper src={popularImg2}/>
        </PopularBox>
      </div>
    </PopularContainer>
  );
};

export default PopularItems;
