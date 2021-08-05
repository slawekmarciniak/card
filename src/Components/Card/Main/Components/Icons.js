import IconButton from "@material-ui/core/IconButton";

const Icons = ({ click, isButtonActive }) => {
  const nameClass = isButtonActive ? "active" : "null";

  return (
    <div className="icons">
      <i className="icon heart far fa-heart"></i>
      <i className="icon share fas fa-share-alt"></i>

      <IconButton
        className="buttonActive"
        onClick={click}
        variant="contained"
        color="primary"
      >
        <i className={`icon fas arrow fa-chevron-down ${nameClass}`}></i>
      </IconButton>
    </div>
  );
};

export default Icons;
