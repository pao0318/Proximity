import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { item, shopName } = location.state || {};

  return (
    <div>
      <h2>Payment</h2>
      {item && shopName && (
        <div>
          <p>Item: {item.name}</p>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price}</p>
          <p>Shop: {shopName}</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
