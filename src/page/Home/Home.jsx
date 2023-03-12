import React, { useEffect, useState } from "react";
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";


const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {

    const [popularmovies, setPopularmovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            // .then(data=>console.log(data))
            .then(data => setPopularmovies(data.results))
            .then(data=>console.log(data.results))

    }, [])


    return (
        <>
            <div className="poster">
                {/* https://www.npmjs.com/package/react-responsive-carousel */}
                <Carousel autoPlay={true} infiniteLoop={true} transitionTime={4} showThumbs={false} showStatus={false}>
                    {
                        popularmovies.map(movie => (
                            // <span>{movie.original_title}</span>
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    {/* https://developers.themoviedb.org/3/getting-started/introduction */}
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="posterImage" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">
                                        {movie? movie.original_title :""}
                                    </div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}{" "}
                                            <i className="fas fa-star"/>{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">
                                        {movie ? movie.overview : ""}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </Carousel>
                <MovieList/>
            </div>
        </>
    )
}






export default Home