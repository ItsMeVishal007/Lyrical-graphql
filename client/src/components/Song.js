import React from "react";
import { gql, useMutation } from "@apollo/client";
import { getAllSongs } from "../lib/gqlQueries/Query";
import "./Song.css";

const deleteSong = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const Song = ({ song, songid }) => {
  const [deleteSongQuery, { loading }] = useMutation(deleteSong);

  return (
    <div className="single-song-Container">
      <h4>{song}</h4>
      {loading ? (
        <h5>Deleting...</h5>
      ) : (
        <button
          onClick={() => {
            deleteSongQuery({
              variables: { id: songid },
              refetchQueries: [{ query: getAllSongs }],
            });
          }}
          style={{ alignSelf: "center" }}
        >
          delete
        </button>
      )}
    </div>
  );
};

export default Song;
