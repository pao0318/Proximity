import React, { useState, useEffect } from 'react';

const PaymentForm = () => {
  const [card, setCard] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const appId = "sandbox-sq0idb-GoPRG_EfjTqhR5Jrk7O2PA";
  const locationId = "LGBS379XKDYNP";

  useEffect(() => {
    const loadSquare = async () => {
      if (!window.Square) {
        return;
      }

      try {
        const payments = window.Square.payments(appId, locationId);
        const initializedCard = await initializeCard(payments);
        setCard(initializedCard);
      } catch (error) {
        console.error('Initializing Card failed', error);
        setErrorMessage('Error initializing card');
      }
    };

    loadSquare();
  }, []);

  const initializeCard = async (payments) => {
    const card = await payments.card();
    await card.attach('#card-container');
    return card;
  };

  const handlePaymentMethodSubmission = async (event) => {
    event.preventDefault();

    try {
      if (!card) return;

      event.target.disabled = true;
      
      const token = await tokenize(card);
      const verificationToken = await verifyBuyer(token);
      const paymentResults = await createPayment(token, verificationToken);

      setPaymentStatus('SUCCESS');
      console.debug('Payment Success', paymentResults);
    } catch (error) {
      event.target.disabled = false;
      setPaymentStatus('FAILURE');
      console.error(error.message);
    }
  };

  const tokenize = async (paymentMethod) => {
    const tokenResult = await paymentMethod.tokenize();
    if (tokenResult.status === 'OK') {
      return tokenResult.token;
    } else {
      let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
      if (tokenResult.errors) {
        errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
      }
      throw new Error(errorMessage);
    }
  };

  const verifyBuyer = async (token) => {
    const verificationDetails = {
      amount: "100",
      billingContact: {
        givenName: 'John',
        familyName: 'Doe',
        email: 'john.doe@square.example',
        phone: '3214563987',
        addressLines: ['123 Main Street', 'Apartment 1'],
        city: 'London',
        state: 'LND',
        countryCode: 'GB',
      },
      currencyCode: 'GBP',
      intent: 'CHARGE',
    };

    const verificationResults = await window.Square.payments(appId, locationId).verifyBuyer(
      token,
      verificationDetails,
    );
    return verificationResults.token;
  };

  const createPayment = async (token, verificationToken) => {
    const body = JSON.stringify({
      locationId,
      sourceId: token,
      verificationToken,
      idempotencyKey: window.crypto.randomUUID(),
    });

    const paymentResponse = await fetch('/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    if (paymentResponse.ok) {
      return paymentResponse.json();
    }

    const errorBody = await paymentResponse.text();
    throw new Error(errorBody);
  };

  return (
    <>
    <div>
    
      <form id="payment-form" onSubmit={handlePaymentMethodSubmission}>
        <div id="card-container"></div>
        <button id="card-button" type="submit" disabled={!card}>Pay $7.99</button>
      </form>
      <div id="payment-status-container" className={`is-${paymentStatus.toLowerCase()}`}>
        {paymentStatus && <p>{paymentStatus}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      </div>
    </>
  );
};

export default PaymentForm;
