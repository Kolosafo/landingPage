import React from "react";
import {
  Container,
  PathDiv,
  Navbar,
  NavLinks,
  HeadlineContainer,
  PhoneImgDiv,
  HeadlineContent,
  ServicesContainer,
  ServicesList,
  SingleService,
} from "./style";

import phoneImg from "../../assets/phoneIcon.jpg";
import heartIcon from "../../assets/heartIcon.jpg";
import lockIcon from "../../assets/lockIcon.jpg";
import starIcon from "../../assets/starIcon.jpg";
import bellIcon from "../../assets/bellIcon.jpg";
import playerIcon from "../../assets/playerIcon.jpg";
import locationIcon from "../../assets/locationIcon.jpg";

const SectionOne = () => {
  return (
    <Container>
      <PathDiv>
        <Navbar>
          <div
            className="left-nav-links"
            style={{ justifyContent: "flex-start" }}
          >
            <NavLinks href="#" style={{ fontSize: "36px" }}>
              Logo
            </NavLinks>
          </div>
          <div className="right-nav-links">
            <NavLinks href="#">Home</NavLinks>
            <NavLinks href="#">About</NavLinks>
            <NavLinks href="#">Features</NavLinks>
            <NavLinks href="#">Videos</NavLinks>
            <NavLinks href="#">Reviews</NavLinks>
          </div>
        </Navbar>
      </PathDiv>
      <HeadlineContainer>
        <PhoneImgDiv>
          <img src={phoneImg} alt="" srcset="" style={{}} />
        </PhoneImgDiv>
        <HeadlineContent>
          <h1>Here is a headline</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </span>
        </HeadlineContent>
      </HeadlineContainer>
      <ServicesContainer>
        <h1>Why Use Our Platform</h1>
        <ServicesList>
          <SingleService>
            <div className="icon-div">
              <img src={heartIcon} alt="heartIcon" />
            </div>
            <div className="description">
              <div className="desc-title">
                <h3>The best application</h3>
              </div>
              <div className="desc-span">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </span>
              </div>
            </div>
          </SingleService>
          <SingleService>
            <div className="icon-div">
              <img src={lockIcon} alt="lockIcon" />
            </div>
            <div className="description">
              <div className="desc-title">
                <h3>Secure Shopping</h3>
              </div>
              <div className="desc-span">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </span>
              </div>
            </div>
          </SingleService>
          <SingleService>
            <div className="icon-div">
              <img src={starIcon} alt="starIcon" />
            </div>
            <div className="description">
              <div className="desc-title">
                <h3>Rate and review</h3>
              </div>
              <div className="desc-span">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </span>
              </div>
            </div>
          </SingleService>
          <SingleService>
            <div className="icon-div">
              <img src={bellIcon} alt="bellIcon" />
            </div>
            <div className="description">
              <div className="desc-title">
                <h3>Get notification</h3>
              </div>
              <div className="desc-span">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </span>
              </div>
            </div>
          </SingleService>
          <SingleService>
            <div className="icon-div">
              <img src={playerIcon} alt="playerIcon" />
            </div>
            <div className="description">
              <div className="desc-title">
                <h3>Send video</h3>
              </div>
              <div className="desc-span">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </span>
              </div>
            </div>
          </SingleService>
          <SingleService>
            <div className="icon-div">
              <img src={locationIcon} alt="locationIcon" />
            </div>
            <div className="description">
              <div className="desc-title">
                <h3>Fast buy and sell.</h3>
              </div>
              <div className="desc-span">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </span>
              </div>
            </div>
          </SingleService>
        </ServicesList>
      </ServicesContainer>
    </Container>
  );
};

export default SectionOne;
