import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop", avgRating: 4.2, totalRatings: 10 },
  { id: 2, name: "Smartphone", description: "Latest model smartphone", avgRating: 4.5, totalRatings: 20 },
  { id: 3, name: "Headphones", description: "Noise-cancelling headphones", avgRating: 4.0, totalRatings: 15 }
];

const App = () => {
  const [productList, setProductList] = useState(products);

  const handleRatingSubmit = (productId, newRating) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const newAvgRating = ((product.avgRating * product.totalRatings) + newRating) / (product.totalRatings + 1);
          return { ...product, avgRating: newAvgRating, totalRatings: product.totalRatings + 1 };
        }
        return product;
      })
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Product Ratings</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
        ))}
      </div>
    </div>
  );
};

export default App;
