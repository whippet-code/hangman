// MUI import
import Button from "@mui/material/Button";

function Key(props) {
  return (
    <Button variant="text" id={props.letter}>
      {props.letter}
    </Button>
  );
}

export default Key;
