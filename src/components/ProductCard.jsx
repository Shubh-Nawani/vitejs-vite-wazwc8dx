import React from "react";
import PropTypes from "prop-types";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", width: "250px", textAlign: "center" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Rating:</strong> {product.avgRating.toFixed(1)} ({product.totalRatings} reviews)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;
