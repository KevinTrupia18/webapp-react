
// src/pages/MovieDetail.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGlobal } from "../context/GlobalContext";

import ReviewForm from "../components/ReviewForm";
import CardReview from "../components/CardReview.jsx";

const endpoint = "http://localhost:3000/api/movies/";

const MovieDetail = () => {
    const { id } = useParams();
    const { setIsLoading } = useGlobal();
    const [movie, setMovie] = useState(null);

    const fetchMovie = () => {
        setIsLoading(true);
        axios.get(endpoint + id)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    };

    useEffect(fetchMovie, [id]);

    if (!movie) return <h2>Caricamento...</h2>;

    return (
        <>
            <h1>{movie.title}</h1>
            <img src={"/images/" + movie.image} width="300" alt={movie.title} />
            <p><strong>Regista:</strong> {movie.director}</p>
            <p><strong>Genere:</strong> {movie.genre}</p>
            <p><strong>Anno:</strong> {movie.release_year}</p>
            <p>{movie.abstract}</p>

            <h3>Recensioni</h3>
            {movie.reviews.map(review => (
                <CardReview key={review.id} reviewProp={review} />
            ))}

            <ReviewForm movieId={movie.id} reloadReviews={fetchMovie} />
        </>
    );
};

export default MovieDetail;