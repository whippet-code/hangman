function Rules() {
  return (
    <div className="Rules">
      <h2>How to Play</h2>
      <section>
        Hangman is a simple word guessing game. Players try to figure out an
        unknown word by guessing letters. If too many letters which do not
        appear in the word are guessed, the player is hanged (and loses).
      </section>
      <section>
        Upon clicking the game link, the game page will load. This page shows
        the blanked out word you ryou to guess, nshowing how many letters it
        contains by underlined spaces. Alongside this is your current hangman
        status image, the more incorrect guessed yuou make to more complete the
        hangman image becomes. The final part of this page shows a keyboard of
        letters. Clicking on a letter will see if the word contains that letter.
        Letters can only be selected once and will become inactive once tried to
        show you your previous guesses.
      </section>
      <section>
        To win the game you must reveal all of the letters in the word before
        the hangmans gallows is complete.
      </section>
    </div>
  );
}

export default Rules;
