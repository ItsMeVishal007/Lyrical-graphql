import React from "react";
import { useQuery } from "@apollo/client";
import Song from "../components/Song";
import { getAllSongs } from "../lib/gqlQueries/Query";

const SongList = () => {
  const { data, loading, error } = useQuery(getAllSongs, {
    fetchPolicy: "network-only",
  });

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  if(loading) return <h4>Loading...</h4>;

  return (
    <div>
      {data?.songs.map((song) => (
        <Song song={song.title} />
      ))}
    </div>
  );
};

export default SongList;
