import React from "react";
import {
  ImgWrapper,
  SecSubTitle,
  SecTitle,
  Tnumber,
  TrendIcons,
  TrendImg,
  TrendImg2,
  TrendNumbers,
  TrendQuantity,
  TrendRightIcons,
  TrendRightTitle,
  TrendStar,
  TrendTotal,
  TrendingBox,
  TrendingContainer,
  TrendingLeft,
  TrendingLeftImgs,
  TrendingRight,
} from "./style";
import trendFood from "../assets/trendingFood.png";
import blackStars from "../assets/blackStars.png";
import hurt from "../assets/hurt.png";
import yellowCart from "../assets/yellowCart.svg";

const TrendingFood = () => {
  return (
    <TrendingContainer>
      <div>
        <SecTitle>Todays Trending Food</SecTitle>
        <SecSubTitle>Peoples loves it most the past week...</SecSubTitle>

        <TrendingBox>
          <TrendingLeft>
            <TrendImg src={trendFood} />
            <TrendingLeftImgs>
              <TrendImg2 src={trendFood} />
              <TrendImg2 src={trendFood} />
              <TrendImg2 src={trendFood} />
            </TrendingLeftImgs>
          </TrendingLeft>

          <TrendingRight>
            <div>
              <TrendRightTitle>Basomoti Kacchi Biriyani</TrendRightTitle>
              <TrendTotal>৳1,050</TrendTotal>
              <TrendStar>
                <ImgWrapper src={blackStars} />
                <div style={{ display: "flex", gap: "5px" }}>
                  5.0 out of (1256){" "}
                  <div style={{ color: "#382274", fontWeight: "600" }}>
                    {" "}
                    Reviews
                  </div>
                </div>
              </TrendStar>
            </div>
            <div>
              <TrendQuantity>Select Quantity</TrendQuantity>
              <TrendNumbers>
                <Tnumber>0.5</Tnumber>
                <Tnumber>1</Tnumber>
                <Tnumber $select>2</Tnumber>
                <Tnumber>5</Tnumber>
                <Tnumber>10</Tnumber>
                <Tnumber>20</Tnumber>
              </TrendNumbers>

              <TrendRightIcons>
                <TrendIcons src={hurt} style={{borderRight:"none"}}/>
                <TrendIcons src={yellowCart}/>
              </TrendRightIcons>
            </div>
          </TrendingRight>
        </TrendingBox>
      </div>
    </TrendingContainer>
  );
};

export default TrendingFood;
