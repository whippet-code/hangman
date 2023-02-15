function GameOver(props) {
  switch (props.win) {
    case "true":
      return <h2 className="GameOver">Winner! Click home to play again.</h2>;
    case "false":
      return (
        <h2 className="GameOver">
          Unlucky this time, the word was {props.word}. Click home to play again
        </h2>
      );
    default:
      break;
  }
}

export default GameOver;
