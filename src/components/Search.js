import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Search() {
  const [value, setValue] = useState("");
  let history = useHistory();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let query = value.replace(" ", "+");
    query = "/search/:" + query;
    history.push(query);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" id="search" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
