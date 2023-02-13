import Letter from "./Letter";

function Word(props) {
  const word = props.word.split("");
  return (
    <div className="Word">
      {word.map((letter, index) => {
        return <Letter value={letter} key={index} index={index} />;
      })}
    </div>
  );
}

export default Word;
