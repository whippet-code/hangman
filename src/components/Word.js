import Letter from "./Letter";

function Word(props) {
  return (
    <div className="Word">
      {[props.word].map((letter, index) => {
        return <Letter value={letter} key={index} />;
      })}
    </div>
  );
}

export default Word;
