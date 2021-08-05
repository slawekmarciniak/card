const Method = ({ method, isButtonActive }) => {
  const nameClass = isButtonActive ? "active" : "null";

  return (
    <div className="method">
      <div className={`methodContainer ${nameClass}`}>{method}</div>
    </div>
  );
};

export default Method;
