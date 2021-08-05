import Header from "./Header";
import Main from "./Main";
import "./style.css";

const Card = ({ title, intro, method, date }) => {
  return (
    <div className="cardContainer">
      <Header title={title} date={date} />
      <Main intro={intro} method={method} />
    </div>
  );
};

export default Card;
