
import { useParams } from "react-router-dom";

function MovieDetail() {

    const { id } = useParams();

    return (

        <div>

            <h1>Dettaglio Film</h1>

            <p>ID film: {id}</p>

        </div>

    );
}

export default MovieDetail;