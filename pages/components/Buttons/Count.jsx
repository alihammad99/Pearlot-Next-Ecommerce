import React from "react";
import {
  CountContainer,
  Number,
  Arrows,
  Increase,
  Decrease,
} from "./styles/Count.style";

const Count = ({ value, setValue }) => {
  return (
    <CountContainer>
      <Number
        type="number"
        value={value}
        onChange={(e) => setValue(e.value)}
      ></Number>
      <Arrows>
        <Increase
          onClick={() => setValue(value + 1)}
          src="/card/increase.svg"
          width={8.76}
          height={6.57}
        ></Increase>
        <Decrease
          onClick={() => value > 0 && setValue(value - 1)}
          src="/card/decrease.svg"
          width={8.76}
          height={6.57}
        ></Decrease>
      </Arrows>
    </CountContainer>
  );
};

export default Count;
