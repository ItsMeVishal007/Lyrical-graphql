import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import Button from "../components/Button";
import { mutationAddSong, getAllSongs } from "../lib/gqlQueries/Query";

const AddSongPage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const [addSong] = useMutation(mutationAddSong, {
    refetchQueries: [{ query: getAllSongs }],
  });

  const onSubmit = (data) => {
    getValues("SongName");
    console.log(">>>>>> ", watch("SongName"));
    addSong({
      variables: {
        title: watch("SongName"),
      },
    });
    history.push("/");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          height: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px",
        }}
      >
        <h2>Create a New Song</h2>
        <input {...register("SongName", { required: true })} />
        {errors.SongName && (
          <span style={{ color: "red" }}>Please enter a Song name</span>
        )}
        <Button
          BtnFormType="submit"
          value="add Song"
          style={{ width: "90px", marginTop: "20px" }}
        />
      </form>
    </div>
  );
};

export default AddSongPage;
