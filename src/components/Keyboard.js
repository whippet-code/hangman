// imp components
import Key from "./Key";

// mui imports
import ButtonGroup from "@mui/material/ButtonGroup";

function Keyboard() {
  // alphabet array for keyboard rendering
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");

  return (
    <ButtonGroup
      variant="contained"
      size="small"
      aria-label="outlined primary button group"
      id="Keyboard"
    >
      {alphabet.map((char, index) => {
        return <Key letter={char} key={index} />;
      })}
    </ButtonGroup>
  );
}

export default Keyboard;
