import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Cards from "../Cards/Cards";
import './MovieList.css';

const apiKey = process.env.REACT_APP_API_KEY;

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const { type } = useParams(); // destructuring

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">
                {
                    (type ? type.replace(/_/g, ' ') : "popular").toUpperCase()
                }
            </h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList