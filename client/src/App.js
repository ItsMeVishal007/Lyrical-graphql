import React from "react";
import "./App.css";
import AddSongs from "./components/AddSongs";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="App">
      <SongList />
      <AddSongs />
    </div>
  );
}

export default App;
