import { useState, useEffect } from "react/cjs/react.development";
import Search from "../components/Search.js";
import Movies from "../components/Movies.js";

function PageFavourites() {
  const [moviesData, setMoviesData] = useState(null);

  const fetchMovies = () => {
    var keys = Object.keys(localStorage);
    let data = [];
    keys.forEach((key) => {
      data.push(JSON.parse(localStorage.getItem(key)));
    });
    setMoviesData(data);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <section className="favs-page">
      <Search />
      {moviesData !== null && <Movies moviesData={moviesData} />}
    </section>
  );
}

export default PageFavourites;
