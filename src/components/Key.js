// import css
import "./styles/componentStyles.css";

// func to see if passed in key has class of pressedKey
function isPressed(classList) {
  return Object.values(classList).includes("pressedKey");
}

// props (letter, guess, onChange)
function Key(props) {
  // func to handle change of state from key being pressed (use passed down onChange func in props)

  function handleChange(event) {
    props.onChange(event.target.id);
  }

  return (
    <button
      type="button"
      onClick={handleChange}
      // onChange={handleChange}
      // onClick={
      //   (e) =>
      //     // if already pressed do nothing else give 'pressedKey class
      //     isPressed(e.target.classList)
      //       ? ""
      //       : e.target.classList.toggle("pressedKey")
      //   // set guess to keys value
      //   // see if word contains guess
      // }
      id={props.letter}
      className="Key"
    >
      {props.letter}
    </button>
  );
}

export default Key;
