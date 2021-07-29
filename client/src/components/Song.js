import React from 'react'
import "./Song.css";

const Song = ({song}) => {
  return (
    <div className="single-song-Container">
      <h4>{song}</h4>
    </div>
  )
}

export default Song;
