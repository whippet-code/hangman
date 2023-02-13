// mod imports
import { useState } from "react";

// components
import Keyboard from "./Keyboard";
import Word from "./Word";
import Picture from "./Picture";

// import all images for game and store as an array
import image1 from "../images/state1.GIF";
import image2 from "../images/state2.GIF";
import image3 from "../images/state3.GIF";
import image4 from "../images/state4.GIF";
import image5 from "../images/state5.GIF";
import image6 from "../images/state6.GIF";
import image7 from "../images/state7.GIF";
import image8 from "../images/state8.GIF";
import image9 from "../images/state9.GIF";
import image10 from "../images/state10.gif";
import image11 from "../images/state11.GIF";

function Game() {
  // dictionary of words for game
  const dictionary = ["test", "trial", "random", "word", "guess"];
  // get random number for an index of array and select that word to play game with
  let word = dictionary[Math.floor(Math.random() * dictionary.length)];
  // use State to store word as initial state
  const [gameWord] = useState(word);

  // Track number of wroing answers (state)
  const [wrongAnswers, setWrongAnswers] = useState(0);

  // State variable for found letters in word
  const [foundLetters, setFoundLetters] = useState(0);

  // Array of images for game
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  // set state for user input guess from key components
  const [guess, setGuess] = useState("");

  // function to handle user guess (to be passed as prop to key via keyboard comp)
  function handleGuess(newGuess) {
    setGuess(newGuess);
    checkGuess(newGuess);
  }

  // check guess against gameWord
  function checkGuess(newGuess) {
    //itterate gameWord - if (.includes) guess letter then
    //itterate gameWord (map)
    //if word.letter === guess
    // change class of this element (function????) && increase revealledLetters by one (for each one) /// if I change class here is it passed to <Word />
    // check if shown === word length = WIN!
    // If not in word - update wronganswers++
    console.log(newGuess);
    gameWord.includes(newGuess)
      ? // convert word string to an array to enable .map method
        gameWord.split("").map((letter) => {
          if (letter === newGuess) {
            console.log("found one");
            // change class

            // increase found letters
            setFoundLetters(foundLetters + 1);
            console.log(foundLetters);
            console.log(gameWord.length);
          }
          // once .map complete, call func  to check if won (foundLetters === length of word)
          return gameOver();
        })
      : setWrongAnswers(wrongAnswers + 1);
    gameOver();
  }

  // function to see if game over
  function gameOver() {
    if (foundLetters === word.length) {
      //render game win
      console.log("WINNER!");
    } else if (wrongAnswers === 9) {
      // set at 9 as state (wrongAnswers) update not taken in to account as this function call is made in same function as state update??
      //render game Lose
      console.log("You Lose!");
    }
  }

  // Game component html passed to App
  return (
    <div className="Game">
      <div className="title">
        <h2>Game Page</h2>
      </div>
      <div className="wordHolder">
        <h4>{guess}</h4>
        <Word word={gameWord} />
      </div>
      <div>
        <button type="button" onClick={() => setWrongAnswers(wrongAnswers + 1)}>
          Click!
        </button>
      </div>
      <div className="pictureHolder">
        <Picture image={images[wrongAnswers]} />
      </div>
      <div className="keyboardHolder">
        <Keyboard guess={guess} onChange={handleGuess} />
      </div>
    </div>
  );
}

export default Game;
