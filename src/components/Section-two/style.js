import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  width: 99vw;
  height: 80vh;
  flex-direction: column;
  /* border: 5px solid red; */

  /* clip-path: polygon(0 0, 100% 0%, 100% 49%, 0 63%); */
  background-color: #fff;

  & .cable-container {
    z-index: 9;
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    top: 200px;
    left: 10;
  }
  & .cableIcon-1 {
    /* position: absolute; */
    /* left: 0; */
  }

  & .cableIcon-2 {
    transform: scaleY(-1);
    transform: scaleX(-1);
  }
`;

export const Join = styled.div`
  /* border: 5px solid green; */
  flex-basis: 50%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;

  background-color: #3b645e;

  & .header-title {
    height: 60%;
    align-self: center;
  }

  & h1 {
    font-size: 36px;
    align-self: center;
    color: white;
  }
`;

export const InputContainer = styled.div`
  /* border: 5px solid black; */
  flex-basis: 50%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & form {
    display: flex;
    width: 30%;
    height: 50%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & .text-input {
      height: 35px;
      width: 260px;
      border-width: .5px;
    }

    & .submit-btn {
      height: 35px;
      width: 130px;
      background-color: white;
      border-width: 1px;
    }

    & label {
      font-size: 14px;
      font-weight: 800;
    }
  }
`;
