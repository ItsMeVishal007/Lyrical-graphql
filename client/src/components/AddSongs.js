import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "./Button";
import "./Song.css";

const AddSongs = (props) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <Button
      add={true}
      style={
        location.pathname !== "/addsong"
          ? { display: "block" }
          : { display: "none" }
      }
      onClick={() => {
        history.push("/addsong");
      }}
      value="+"
    />
  );
};

export default AddSongs;
