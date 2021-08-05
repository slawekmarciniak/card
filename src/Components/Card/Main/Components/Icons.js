import IconButton from "@material-ui/core/IconButton";

const Icons = ({ click, isButtonActive }) => {
  const nameClass = isButtonActive ? "active" : "null";

  return (
    <div className="icons">
      <i class="icon heart far fa-heart"></i>
      <i class="icon share fas fa-share-alt"></i>

      <IconButton
        className="buttonActive"
        onClick={click}
        variant="contained"
        color="primary"
      >
        <i class={`icon fas arrow fa-chevron-down ${nameClass}`}></i>
      </IconButton>
    </div>
  );
};

export default Icons;
