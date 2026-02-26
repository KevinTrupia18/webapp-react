
// src/components/ReviewForm.jsx
import { useState } from "react";
import axios from "axios";

const ReviewForm = ({ movieId, reloadReviews }) => {
    const [name, setName] = useState("");
    const [vote, setVote] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, { name, vote, text })
            .then(() => {
                setName(""); setVote(""); setText("");
                reloadReviews(); // aggiornamento immediato
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <h4>Aggiungi recensione</h4>
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-control mb-2"
                required
            />
            <input
                type="number"
                placeholder="Voto"
                value={vote}
                onChange={e => setVote(e.target.value)}
                className="form-control mb-2"
                required
            />
            <textarea
                placeholder="Recensione"
                value={text}
                onChange={e => setText(e.target.value)}
                className="form-control mb-2"
                required
            />
            <button type="submit" className="btn btn-primary">Invia</button>
        </form>
    );
};

export default ReviewForm;