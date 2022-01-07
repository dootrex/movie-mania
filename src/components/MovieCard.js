import { Link } from "react-router-dom";
import noPoster from "../images/no-movie-poster.jpg";
import Heart from "react-heart";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function MovieCard({ movie }) {
  const [liked, setLiked] = useState(false);
  let history = useHistory();

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

    window.location.pathname === "/movie-mania/favs" &&
      window.location.reload();
  };
  return (
    <div className="movie-card">
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
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div style={{ width: "2rem" }}>
          <Heart isActive={liked} onClick={handleLike} />
        </div>
        <Link to={`/movie/${movie.id}`}>More Info</Link>
      </div>
    </div>
  );
}

export default MovieCard;
