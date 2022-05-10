import React, { useState } from "react";
import {
  CountContainer,
  Number,
  Arrows,
  Increase,
  Decrease,
} from "./Count.style";

const Count = () => {
  const [numberValue, setNumberValue] = useState(1);

  return (
    <CountContainer>
      <Number
        type="number"
        value={numberValue}
        onChange={(e) => setNumberValue(e.value)}
      ></Number>
      <Arrows>
        <Increase
          onClick={() => setNumberValue(numberValue + 1)}
          src="/card/increase.svg"
          width={8.76}
          height={6.57}
        ></Increase>
        <Decrease
          onClick={() => setNumberValue(numberValue > 0 && numberValue - 1)}
          src="/card/decrease.svg"
          width={8.76}
          height={6.57}
        ></Decrease>
      </Arrows>
    </CountContainer>
  );
};

export default Count;
