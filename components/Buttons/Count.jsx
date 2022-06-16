import React from "react";
import {
  CountContainer,
  Number,
  Arrows,
  Increase,
  Decrease,
} from "./styles/Count.style";

const Count = () => {
  return (
    <CountContainer>
      <Number
        type="number"
      ></Number>
      <Arrows>
        <Increase
          src="/card/increase.svg"
          width={8.76}
          height={6.57}
        ></Increase>
        <Decrease
          src="/card/decrease.svg"
          width={8.76}
          height={6.57}
        ></Decrease>
      </Arrows>
    </CountContainer>
  );
};

export default Count;
