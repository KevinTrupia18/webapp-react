
import { Link } from "react-router-dom";

function MovieCard({ id, title, image }) {

    return (

        <div className="col-4 mb-3">

            <div className="card">

                <img
                    src={image}
                    className="card-img-top"
                />

                <div className="card-body">

                    <h5>{title}</h5>

                    <Link
                        to={`/movies/${id}`}
                        className="btn btn-primary"
                    >
                        Dettaglio
                    </Link>

                </div>

            </div>

        </div>

    );
}

export default MovieCard;