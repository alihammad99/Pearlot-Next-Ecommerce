import React from "react";
import {
  PrimaryButton,
  Arrow,
  BtnContainer,
  ArrowContainer,
} from "./Buttons.style";

const Primary = ({ text }) => {
  return (
    <BtnContainer>
      <ArrowContainer>
        <Arrow src="/arrow.svg" width={91} height={7} />
      </ArrowContainer>
      <PrimaryButton>{text}</PrimaryButton>
    </BtnContainer>
  );
};

export default Primary;
