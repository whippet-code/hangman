// components
import Keyboard from "./Keyboard";
import Word from "./Word";
import Picture from "./Picture";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// import all images for game and store as an array
import image1 from "../images/state1.GIF";
import image2 from "../images/state2.GIF";
import image3 from "../images/state3.GIF";
import image4 from "../images/state4.GIF";

function Game() {
  // dictionary of words for game
  const dictionary = ["test", "trial", "random", "word", "guess"];
  // get random number for an index of array and select that word to play game with
  let word = dictionary[Math.floor(Math.random() * dictionary.length)];

  // Track number of wroing answers (state)
  let wrongAnswers = 3;

  // Array of images for game
  const images = [image1, image2, image3, image4];

  return (
    <Box
      sx={{
        width: 0.9,
        height: 0.9,
        padding: 2,
        borderRadius: 4,
        backgroundColor: "antiquewhite",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Game Page</h2>
        </Grid>
        <Grid item xs={6}>
          <Word word={word} />
        </Grid>
        <Grid>
          <Picture image={images[wrongAnswers]} />
        </Grid>
        <Grid item xs={12} className="keyboardHolder">
          <Keyboard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Game;
