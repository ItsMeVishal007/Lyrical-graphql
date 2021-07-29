import React from "react";
import { gql, useQuery } from "@apollo/client";
import Song from "./Song";

const query = gql`
  query GetSongs {
    songs {
      title
    }
  }
`;

const SongList = () => {
  const { data, loading, error } = useQuery(query, {
    fetchPolicy: "network-only",
  });

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {
        data?.songs.map(song=>(
          <Song song={song.title} />
        ))
      }
    </div>
  );
};

export default SongList;
