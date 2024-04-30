import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentForm from "../MakePayments/PaymentForm";

const Payment = () => {
  const location = useLocation();
  let navigate= useNavigate();
  const { item, shopName } = location.state || {};
  const [paymentInProgress, setPaymentInProgress] = useState(false);

  const handleStartPayment = () => {
    navigate("/examples-payment-card")
    setPaymentInProgress(true);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', marginTop: 20, padding: 10 }}>
      <div style={{ marginBottom: 10 }}>
        <h3>Payment Details</h3>
        {item && shopName && (
          <div>
            <p>Item: {item.name}</p>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
            <p>Shop: {shopName}</p>
            {!paymentInProgress && (
              <button
                style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: 10, marginTop: 10 }}
                onClick={handleStartPayment}
              >
                 PayNow
              </button>
            )}
            <PaymentForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
