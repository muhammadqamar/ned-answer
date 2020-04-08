import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import angle from "../assets/images/angle.svg";
import cross from "../assets/images/cross.svg";
import searchmobile from "../assets/images/search.svg";
export default function Search() {
  //dummy data filtyeration
  const top100Films = [
    { title: "Hopsital", year: 1994 },
    { title: "Experts", year: 1972 }
  ];

  const defaultProps = {
    options: top100Films,
    getOptionLabel: option => option.title
  };

  const flatProps = {
    options: top100Films.map(option => option.title)
  };

  const [value, setValue] = useState(null);

  const openSearchFormobile = () => {
    document
      .getElementsByClassName("mobilesearch custom")[0]
      .classList.toggle("show");

    document
      .getElementsByClassName("fixedheightsearch")[0]
      .classList.toggle("overlay");
  };

  const openSearchFordesktop = () => {
    {
      document
        .getElementsByClassName("mobilesearch custom")[0]
        .classList.toggle("show");

      document
        .getElementsByClassName("fixedheightsearch")[0]
        .classList.toggle("overlay");
    }
  };

  const openSearchFordesktopmobile = () => {
    {
      document
        .getElementsByClassName("fixedheightsearch")[0]
        .classList.toggle("overlay");
    }
  };

  return (
    <>
      <img
        src={searchmobile}
        className="mobilesearch custom"
        onClick={openSearchFormobile}
      />

      <div className="autocomplete_container">
        <img src={angle} className="mobile icons" />
        <Autocomplete
          {...defaultProps}
          id="debug"
          debug
          renderInput={params => (
            <TextField
              {...params}
              label="Search your fertility  questions"
              margin="normal"
            />
          )}
          onOpen={openSearchFordesktopmobile}
          onClose={openSearchFordesktopmobile}
        />
        <img
          src={cross}
          className="mobile icons"
          onClick={openSearchFormobile}
        />
      </div>
    </>
  );
}
