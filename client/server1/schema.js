const Ajv = require('ajv/dist/jtd').default;

const ajv = new Ajv(); 

const paymentSchema = {
  properties: {
    sourceId: { type: 'string' },
    locationId: { type: 'string' },
    idempotencyKey: { type: 'string' },
  },
  optionalProperties: {
    amount: { type: 'uint32' },
    customerId: { type: 'string' },
    verificationToken: { type: 'string' },
  },
};

const cardSchema = {
  properties: {
    sourceId: { type: 'string' },
    locationId: { type: 'string' },
    customerId: { type: 'string' },
    idempotencyKey: { type: 'string' },
  },
  optionalProperties: {
    verificationToken: { type: 'string' },
  },
};

module.exports = {
  validatePaymentPayload: ajv.compile(paymentSchema),
  validateCreateCardPayload: ajv.compile(cardSchema),
};
