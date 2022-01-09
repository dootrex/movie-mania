import React from "react";
import tmdb from '../images/tmdb.svg';

function PageAbout() {
    return (
        <>
        <section className="about-page">
            <h1>About Movie Mania</h1>
            <p>Our mission is to provide users with a mass collection of movie data.</p>
            <br></br>
            <p>We believe that everyone deserves to gain access to precise information and reviews on that one movie they are interested in.</p>
            <br></br>

            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img src={tmdb} alt='tmbd logo' width='8%'/>
        </section>
        </>
    )
}

export default PageAbout;
