
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

function MovieDetail() {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {

        axios.get("http://localhost:3000/api/movies/" + id)

            .then((response) => {

                setMovie(response.data);

            })

            .catch((error) => {

                console.log(error);

            });

    }, [id]);



    if (!movie) {

        return <h2>Caricamento...</h2>;

    }


    return (

        <div>

            <h1>{movie.title}</h1>

            <img
                src={"/images/" + movie.image}
                width="300"
            />

            <p>

                <strong>Regista:</strong> {movie.director}

            </p>

            <p>

                <strong>Genere:</strong> {movie.genre}

            </p>

            <p>

                <strong>Anno:</strong> {movie.release_year}

            </p>

            <p>

                {movie.abstract}

            </p>

            <h3>Recensioni</h3>

            {movie.reviews.map(review => (

                <div key={review.id}>

                    <p>

                        <strong>{review.name}</strong>

                    </p>

                    <p>

                        Voto: {review.vote}

                    </p>

                    <p>

                        {review.text}

                    </p>

                    <hr />

                </div>

            ))}

        </div>

    );

}

export default MovieDetail;