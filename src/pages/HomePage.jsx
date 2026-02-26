
// src/pages/Homepage.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobal } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";

const endpoint = "http://localhost:3000/api/movies";

const Homepage = () => {
    const { setIsLoading } = useGlobal();
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        setIsLoading(true);
        axios.get(endpoint)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    };

    useEffect(fetchMovies, []);

    return (
        <>
            <h1 className="text-primary">Lista Film</h1>
            <div className="row row-cols-3 mt-4">
                {movies.map(movie => (
                    <div className="col" key={movie.id}>
                        <MovieCard movieProp={movie} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Homepage;