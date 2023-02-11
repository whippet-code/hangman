// components
import Keyboard from "./Keyboard";
import Word from "./Word";
import Picture from "./Picture";

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
  let wrongAnswers = 0;

  // Array of images for game
  const images = [image1, image2, image3, image4];

  return (
    <div className="Game">
      <div className="gameContainer">
        <div className="title">
          <h2>Game Page</h2>
        </div>
        <div className="wordHolder">
          <Word word={word} />
        </div>
        <div>
          <button type="button" onClick={() => (wrongAnswers += 1)}>
            Click!
          </button>
        </div>
        <div className="pictureHolder">
          <Picture image={images[wrongAnswers]} />
        </div>
        <div className="keyboardHolder">
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default Game;
