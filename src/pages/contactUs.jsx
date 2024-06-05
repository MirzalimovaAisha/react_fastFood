import React from "react";
import {
  CheckBox,
  ConcatOffices,
  ConcatRightText,
  ConcatRightTexts,
  ContactBox,
  ContactContainer,
  ContactInputs,
  ContactRedText,
  ContactRight,
  ImgWrapper,
  Input,
  SecSubTitle,
  SecTitle,
  SubmitButton,
} from "./style";
import map from "../assets/map.png";

const ContactUs = () => {
  return (
    <ContactContainer>
      <div>
        <SecTitle>Contact us</SecTitle>
        <SecSubTitle>
          Need an experienced and skilled hand with custom IT projects? <br />{" "}
          Fill out the form to get a free consultation.
        </SecSubTitle>

        <ContactBox>
          <div>
            <ContactInputs>
              <Input>Your Company Name</Input>
              <Input>Nature of Bussiness</Input>
              <div style={{ display: "flex", gap: "24px" }}>
                <Input style={{ width: "180%" }}>Adress</Input>
                <Input>Postcode</Input>
              </div>
              <Input>Contact name</Input>
              <Input>Contact Phone</Input>
              <Input>email@gmail</Input>
            </ContactInputs>
            <ContactRedText>Please, enter valid email address</ContactRedText>
            <CheckBox>
              <input type="checkbox" />
              <label>I want to protect my data by signing an NDA</label>
            </CheckBox>

            <SubmitButton>SUBMIT</SubmitButton>
          </div>

          <ContactRight>
            <div style={{marginBottom:"43px"}}>
              <ConcatOffices>Offices</ConcatOffices>

              <ConcatRightTexts>
                <ConcatRightText>
                  United States <br /> 500 5th Avenue Suite 400, NY 10110
                </ConcatRightText>

                <ConcatRightText>
                  United Kingdom <br /> High St, Bromley BR1 1DN
                </ConcatRightText>

                <ConcatRightText>
                  France <br /> 80 avenue des Terroirs de France, Paris
                </ConcatRightText>
              </ConcatRightTexts>
            </div>

            <ImgWrapper src={map} />
          </ContactRight>
        </ContactBox>
      </div>
    </ContactContainer>
  );
};

export default ContactUs;
