import styled from "styled-components";

// NAVBAR == 15%
// HEADLINE == 42.5%
// SERVICES == 42.5%

export const Container = styled.section`
  display: flex;
  width: 99vw;
  height: 70vw;
  flex-direction: column;
  /* border: 5px solid red; */
  position: relative;

  /* clip-path: polygon(0 0, 100% 0%, 100% 49%, 0 63%); */
  background-color: #fff;
`;

export const PathDiv = styled.div`
  position: absolute;
  flex-basis: 50%;
  height: 100%;
  width: 100%;
  clip-path: polygon(0 0, 100% 0%, 100% 45%, 0 55%);

  background-color: #3b645e;
  /* border: 5px solid yellow; */

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const Navbar = styled.nav`
  flex-basis: 10%;
  width: 65%;
  height: 70%;
  /* border: 2px solid purple; */

  display: flex;
  justify-content: space-between;

  & .left-nav-links,
  .right-nav-links {
    /* border: 2px solid white; */
    display: flex;
    flex-basis: 50%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const NavLinks = styled.a`
  color: white;
  text-decoration: none;
`;

// TODO: HEADLINE SECTION
export const HeadlineContainer = styled.div`
  margin-top: 120px;
  z-index: 2;
  flex-basis: 42.5%;
  /* border: 3px solid blue; */
  margin-bottom: -95px;

  display: flex;
  width: 75%;
  align-self: center;
`;

export const PhoneImgDiv = styled.div`
  flex-basis: 50%;
  /* border: 3px solid black; */

  display: flex;
  justify-content: center;
  height: 82%;
  width: 100%;
  /* justify-content: flex-end; */
`;

export const HeadlineContent = styled.div`
  flex-basis: 50%;
  flex-direction: column;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  /* border: 3px solid black; */

  & h1 {
    font-size: 48px;
    color: white;
    margin-bottom: 20px;
  }

  & span {
    color: white;
    width: 75%;
  }
`;

// TODO: SERVICES SECTION
export const ServicesContainer = styled.div`
  flex-basis: 42.5%;
  align-self: center;
  height: 100;
  width: 75%;
  /* border: 5px solid black; */

  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 48px;
    margin-bottom: 50px;
  }
`;

export const ServicesList = styled.div`
  flex-basis: 60%;
  height: 100;
  width: 100%;
  /* border: 5px solid green; */

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const SingleService = styled.div`
  flex-basis: 30%;
  height: 40%;
  width: 100%;
  /* border: 5px solid green; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  & .icon-div {
    flex-basis: 18%;
    width: 100%;
  }

  & .description {
    flex-basis: 79%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .desc-title {
    flex-basis: 18%;
    width: 100%;
  }

  & .desc-span {
    flex-basis: 78%;
    width: 80%;
  }

  & span {
    font-size: 12px;
  }
`;
