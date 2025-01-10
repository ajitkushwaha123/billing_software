import React from "react";

const PriceFormatter = ({ price }) => {
  const formatPrice = (price) => {
    if (price >= 1e7) {
      return `₹${(price / 1e7).toFixed(2)} C`; 
    } else if (price >= 1e5) {
      return `₹${(price / 1e5).toFixed(2)} L`; 
    } else {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(price);
    }
  };

  return <span>{formatPrice(price)}</span>;
};

export default PriceFormatter;