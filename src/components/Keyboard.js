// imp components
import Key from "./Key";

function Keyboard() {
  // alphabet array for keyboard rendering
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");

  return (
    <div id="Keyboard">
      {alphabet.map((char, index) => {
        return <Key letter={char} key={index} />;
      })}
    </div>
  );
}

export default Keyboard;
