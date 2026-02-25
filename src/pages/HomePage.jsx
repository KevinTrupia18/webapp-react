
import MovieCard from "../components/MovieCard";

function Home() {
    return (
        <div>

            <h1>Lista Film</h1>

            <div className="row">

                <MovieCard
                    id={1}
                    title="Inception"
                    image="/images/inception.jpg"
                />

                <MovieCard
                    id={2}
                    title="Interstellar"
                    image="/images/interstellar.jpg"
                />

                <MovieCard
                    id={3}
                    title="Matrix"
                    image="/images/matrix.jpg"
                />

                <MovieCard
                    id={4}
                    title="The Godfather"
                    image="/images/the_godfather.jpg"
                />

                <MovieCard
                    id={5}
                    title="Titanic"
                    image="/images/titanic.jpg"
                />

            </div>

        </div>
    );
}

export default Home;