import { Link } from "react-router-dom";
import noPoster from "../images/no-movie-poster.jpg";
import Heart from "react-heart";
import { useState, useEffect } from "react";

function MovieCard({ movie }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkLiked = async () => {
      localStorage.getItem(`${movie?.id}`) ? setLiked(true) : setLiked(false);
    };
    checkLiked();
  }, [movie]);

  const handleLike = () => {
    setLiked(!liked);
    liked
      ? localStorage.removeItem(`${movie.id}`)
      : localStorage.setItem(`${movie.id}`, JSON.stringify(movie));

    // window.location.href ===
    //   "https://dootrex.github.io/movie-mania/#/movie-mania/favs" &&
    window.location.reload();
  };
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-poster">
          {movie.poster_path === null ? (
            <img src={noPoster} alt="No poster available." />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Godzilla vs Kong"
            />
          )}
        </div>
      </Link>

      <div className="movie-info d-flex flex-row justify-content-between">
        <div>
          <Heart
            isActive={liked}
            onClick={handleLike}
            style={{ width: "35px" }}
          />
        </div>
        <div>
          <Link to={`/movie/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>
        </div>
      </div>
      <h4>{movie.tagline}</h4>
      <p>Realease Date: {movie.release_date}</p>
      <p>Movie Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieCard;
