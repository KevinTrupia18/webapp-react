
import { useState } from "react";
import axios from "axios";

function ReviewForm({ movieId }) {

    const [name, setName] = useState("");
    const [vote, setVote] = useState("");
    const [text, setText] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        axios.post("http://localhost:3000/api/movies/" + movieId + "/reviews", {
            name: name,
            vote: vote,
            text: text
        })
            .then(() => {

                alert("Recensione aggiunta!");

                setName("");
                setVote("");
                setText("");

            })
            .catch(error => {

                console.log(error);

            });

    }

    return (

        <div>

            <h3>Aggiungi Recensione</h3>

            <form onSubmit={handleSubmit}>

                <div>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Voto"
                        value={vote}
                        onChange={(e) => setVote(e.target.value)}
                    />
                </div>

                <div>
                    <textarea
                        placeholder="Recensione"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Invia
                </button>

            </form>

        </div>

    );

}

export default ReviewForm;