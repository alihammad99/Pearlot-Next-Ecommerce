import React from "react";
import {
  PrimaryButton,
  Arrow,
  BtnContainer,
  ArrowContainer,
} from "./styles/Buttons.style";

const Primary = ({ text, left = false }) => {
  return (
    <BtnContainer left={left}>
      <ArrowContainer>
        <Arrow src="/arrow.svg" width={91} height={7} />
      </ArrowContainer>
      <PrimaryButton>{text}</PrimaryButton>
    </BtnContainer>
  );
};

export default Primary;
