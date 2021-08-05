import { UserAvatar, HeaderPicture, Title } from "./Components";
import "./style.css";

const Header = ({ title, date }) => {
  return (
    <div className="headerContainer">
      <div className="titleContainer">
        <UserAvatar />
        <Title title={title} date={date} />
      </div>
      <HeaderPicture />
    </div>
  );
};

export default Header;
