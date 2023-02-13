import "./styles/componentStyles.css";

function Letter(props) {
  return (
    <h2 id={`word${props.index}`} className="hiddenLetter">
      {props.value}
    </h2>
  );
}

export default Letter;
