import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddSongs from "./components/AddSongs";
import SongList from "./pages/SongList";
import AddSongPage from "./pages/addSongPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={SongList} />
        <Route exact path="/addsong" component={AddSongPage} />
        <AddSongs />
      </Router>
    </div>
  );
}

export default App;
