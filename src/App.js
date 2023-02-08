// react imports
import { Link, Routes, Route } from "react-router-dom";

//import Components

import Home from "./components/Home";
import Game from "./components/Game";
import Rules from "./components/Rules";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Hangman</h1>
        <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
        <Link to="/rules">Rules</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
