// imp components
import Key from "./Key";

// props ( guess, honChange )
function Keyboard(props) {
  // alphabet array for keyboard rendering
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");

  // itterate alphabet array for each letter render a key (pass props through)
  return (
    <div id="Keyboard">
      {alphabet.map((char, index) => {
        return (
          <Key
            letter={char}
            key={index}
            guess={props.guess}
            onChange={props.onChange}
          />
        );
      })}
    </div>
  );
}

export default Keyboard;
