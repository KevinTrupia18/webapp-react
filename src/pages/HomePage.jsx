
import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../components/MovieCard";

function Homepage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3000/api/movies")

            .then((response) => {

                setMovies(response.data);

            })

            .catch((error) => {

                console.log(error);

            });

    }, []);


    return (

        <div>

            <h1>Lista Film</h1>

            <div className="row">

                {movies.map(movie => (

                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        image={"/images/" + movie.image}
                    />

                ))}

            </div>

        </div>

    );

}

export default Homepage;