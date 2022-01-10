import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import { API_KEY } from "../globals/globals";
import axios from "axios";

export default function PageSearch() {
  // A custom hook that builds on useLocation to parse
  // the query string for you.
  let { term } = useParams();
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      console.log(term);
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`
      );
      //const moviesData = await res.json();
      const first12Movies = res.data.results.splice(0, 12);
      setMoviesData(first12Movies);
    };

    fetchMovies();
  }, [term]);
  return (
    <div>
      <section className="home-page">
        <Search />
        {moviesData !== null && moviesData.length > 0 ? (
          <Movies moviesData={moviesData} />
        ) : (
          <h3 className="p-5">Your search returned no results.</h3>
        )}
      </section>
    </div>
  );
}
