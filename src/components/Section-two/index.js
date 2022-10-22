import React from "react";
import { Container, Join, InputContainer } from "./style";
import cableIcon from "../../assets/cableIcon.png";

const SectionTwo = () => {
  return (
    <Container>
      <Join>
        <div className="header-title">
          <h1>Join the waitlist</h1>
        </div>
      </Join>
      <div className="cable-container">
        <img src={cableIcon} alt="cableIcon1" className="cableIcon-1" />
        <img src={cableIcon} alt="cableIcon2" className="cableIcon-2" />
      </div>
      <InputContainer>
        <form action="">
          <label htmlFor="emai-input">Add your email</label>
          <input
            type="text"
            name="emai-input"
            placeholder="Write email address"
            className="text-input"
          />
          <input type="submit" value={"SUBSCRIBE"} className="submit-btn" />
        </form>
      </InputContainer>
    </Container>
  );
};

export default SectionTwo;
