import { gql } from "@apollo/client";

export const getAllSongs = gql`
  query GetSongs {
    songs {
      title
    }
  }
`;

export const mutationAddSong = gql`
  mutation AddSongs($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
