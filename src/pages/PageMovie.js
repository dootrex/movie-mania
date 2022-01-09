import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import { API_TOKEN } from "../globals/globals";

export default function PageMovie() {
  let { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_TOKEN,
          },
        }
      );
      const movieData = await res.json();

      setMovieData(movieData);
    };

    fetchMovies();
  });

  return (
    <>
      <Movie movie={movieData} />
    </>
  );
}
