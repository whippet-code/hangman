// react imports
import { Link, Routes, Route } from "react-router-dom";

//import Components

import Home from "./components/Home";
import Game from "./components/Game";
import Rules from "./components/Rules";
import GameOver from "./components/GameOver";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/play" className="link">
          Play
        </Link>
        <Link to="/rules" className="link">
          Rules
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </div>
  );
}

export default App;
