
// src/components/CardReview.jsx
const CardReview = ({ reviewProp }) => {
  return (
    <div className="border p-2 mb-2">
      <p><strong>{reviewProp.name}</strong> - Voto: {reviewProp.vote}</p>
      <p>{reviewProp.text}</p>
    </div>
  );
};

export default CardReview;