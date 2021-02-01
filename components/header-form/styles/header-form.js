import styled from "styled-components";
import bgImage from "../../../images/backgroundImg.webp";
import workIcon from "../../../images/work.svg";

export const Container = styled.form`
  display: flex;
  padding-top: 41px;
  padding-bottom: 41px;
  padding-left: 18px;
  padding-right: 18px;
  background-image: url(${bgImage});
  background-position: 50%;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1000px) {
    padding-left: calc(206px / 2);
    padding-right: calc(206px / 2);
    padding-top: calc(42px / 2);
    padding-bottom: calc(42px / 2);
  }

  @media (min-width: 1200px) {
    padding-left: 206px;
    padding-right: 206px;
    padding-top: 42px;
    padding-bottom: 42px;
  }
`;

export const Input = styled.input`
  position: relative;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  width: 100%;
  &:before {
    content: "";
    background-image: url(${workIcon});
    display: block;
    position: absolute;
    top: 50%;
    left: 10px;
    width: 15px;
    height: 15px;
  }
`;

export const Button = styled.button`
  background: #1e86ff;
  border-radius: 4px;
  padding-left: 27px;
  padding-right: 27px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
`;

export const Div = styled.div`
  max-height: 55px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 8px;
  width: 100%;
`;
