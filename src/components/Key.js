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
      onClick={
        // Call func to change guess state (in turn checks the guess)

        // Then call isPressed func to
        (e) =>
          // if already pressed do nothing else call handleChange func to change guess state to key value and give key 'pressedKey class
          {
            if (isPressed(e.target.classList)) {
              return;
            } else {
              handleChange(e);
              e.target.classList.toggle("pressedKey");
            }
          }
      }
      id={props.letter}
      className="Key"
    >
      {props.letter}
    </button>
  );
}

export default Key;
