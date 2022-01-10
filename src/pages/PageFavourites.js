//had to use class based component, was causing issue on routing after deployed.

import Search from "../components/Search.js";
import Movies from "../components/Movies.js";
import React, { Component } from "react";

class PageFavourites extends Component {
  constructor() {
    super();
    this.state = { movies: null };
  }
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = () => {
    var keys = Object.keys(localStorage);
    let data = [];
    keys.forEach((key) => {
      data.push(JSON.parse(localStorage.getItem(key)));
    });
    this.setState({ movies: data });
  };

  render() {
    return (
      <section className="favs-page">
        <Search />
        {this.state.movies !== null && this.state.movies.length > 0 ? (
          <Movies moviesData={this.state.movies} />
        ) : (
          <h3 className="p-4">
            Sorry you have no favourited movies. Return to the home page to add
            a favourite movie”
          </h3>
        )}
      </section>
    );
  }
}

export default PageFavourites;
