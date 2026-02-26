
// src/components/MovieCard.jsx
import { Link } from "react-router-dom";

const MovieCard = ({ movieProp }) => {
    return (
        <div className="card mb-3">
            <img src={"/images/" + movieProp.image} className="card-img-top" alt={movieProp.title} />
            <div className="card-body">
                <h5 className="card-title">{movieProp.title}</h5>
                <Link to={`/movies/${movieProp.id}`} className="btn btn-primary">Dettaglio</Link>
            </div>
        </div>
    );
};

export default MovieCard;