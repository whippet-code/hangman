import Container from "@mui/material/Container";

import Letter from "./Letter";

function Word(props) {
  return (
    <Container>
      {[props.word].map((letter, index) => {
        return <Letter value={letter} key={index} />;
      })}
    </Container>
  );
}

export default Word;
