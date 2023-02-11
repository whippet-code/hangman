function Key(props) {
  return (
    <button type="button" id={props.letter}>
      {props.letter}
    </button>
  );
}

export default Key;
