// import css
import "./styles/componentStyles.css";

// func to see if passed in key has class of pressedKey
function isPressed(classList) {
  return Object.values(classList).includes("pressedKey");
}

function Key(props) {
  return (
    <button
      type="button"
      onClick={
        (e) =>
          // if already pressed do nothing else give 'pressedKey class
          isPressed(e.target.classList)
            ? ""
            : e.target.classList.toggle("pressedKey")
        // set guess to keys value
        // see if word contains guess
      }
      id={props.letter}
      className="Key"
    >
      {props.letter}
    </button>
  );
}

export default Key;
