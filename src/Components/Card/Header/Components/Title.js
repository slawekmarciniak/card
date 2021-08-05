const Title = ({ title, date }) => {
  return (
    <div className="titleDateContainer">
      <p>{title}</p>
      <p>{date}</p>
    </div>
  );
};

export default Title;
