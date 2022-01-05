import React from "react";
import noPoster from "../images/no-movie-poster.jpg";
import Heart from "react-heart";
import { useState } from "react";

export default function Movie({ movie }) {
  //look at the console for the info we can display
  console.log(movie);
  const [liked, setLiked] = useState(false);
  //later this state will not be set to false as default but will be checked from local storage with movie id

  const handleLike = () => {
    setLiked(!liked);
    //local Storage setting up for specific movie will go here by using movie id.
  };

  return (
    <>
      {movie ? (
        <>
          <div className="movie-poster">
            {movie.poster_path === null ? (
              <img src={noPoster} alt="No poster available." />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </div>
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <h3>{movie.tagline}</h3>
            <div style={{ width: "2rem" }}>
              <Heart isActive={liked} onClick={handleLike} />
            </div>

            <p>Revenue: {movie.revenue}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>{movie.overview}</p>
          </div>
        </>
      ) : (
        <h1>waiting</h1>
      )}
    </>
  );
}
