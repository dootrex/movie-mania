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
      <form onSubmit={handleSubmit} className="input-group p-4">
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleChange}
          className="form-control"
          placeholder="Search for a Movie..."
        />
        <button
          type="submit"
          className="btn btn-outline-secondary btn-primary text-dark"
        >
          <h4>Search</h4>
        </button>
      </form>
    </div>
  );
}
