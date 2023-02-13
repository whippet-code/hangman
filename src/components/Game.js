// mod imports
import { useState, useEffect } from "react";

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
  // useEffect to track changes to above two states
  useEffect(() => {
    console.log("Game status check");
    console.log(gameWord.length);
    if (foundLetters === gameWord.length) {
      //render game win
      console.log("WINNER!");
    } else if (wrongAnswers === 10) {
      //render game Lose
      console.log("You Lose!");
    }
  }, [wrongAnswers, foundLetters, gameWord]);

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
    // change class of this element & increase foundLetters by one
    // If not in word - update wronganswers++
    if (gameWord.includes(newGuess)) {
      // convert word string to an array to enable .map method
      gameWord.split("").map((letter, index) => {
        if (letter === newGuess) {
          // change class
          document.getElementById("word" + index).classList.toggle("show");
          // increase found letters
          setFoundLetters((prevState) => prevState + 1);
        }
        return 1;
      });
    } else {
      setWrongAnswers((prevState) => prevState + 1);
    }
  }

  // Game component html passed to App
  return (
    <div className="Game">
      <div className="title">
        <h2>Game Page</h2>
      </div>
      <div className="wordHolder">
        <Word word={gameWord} />
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
