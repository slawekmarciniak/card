import { useState } from "react";
import { Icons, Method } from "./Components";
import "./style.css";

const Main = ({ intro, method }) => {
  const [button, setButton] = useState(false);

  const onClick = () => {
    setButton((prev) => !prev);
    console.log(button);
  };

  return (
    <div className="mainContainer">
      <div className="intro">{intro}</div>
      <Icons click={onClick} isButtonActive={button} />
      <Method method={method} isButtonActive={button} />
    </div>
  );
};

export default Main;
