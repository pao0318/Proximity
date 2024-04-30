// // micro provides http helpers
// const { createError, json, send } = require('micro');

// const { router, get, post } = require('microrouter');
// // serve-handler serves static assets
// const staticHandler = require('serve-handler');
// // async-retry will retry failed API requests
// const retry = require('async-retry');

// // schema validates incoming requests
// const {
//   validatePaymentPayload,
//   validateCreateCardPayload,
// } = require('./server1/schema');
// // square provides the API client and error types
// const { ApiError, client: square } = require('./server1/square');

// async function createPayment(req, res) {
//   const payload = await json(req);
//   // We validate the payload for specific fields. You may disable this feature
//   // if you would prefer to handle payload validation on your own.
//   if (!validatePaymentPayload(payload)) {
//     throw createError(400, 'Bad Request');
//   }

//   await retry(async (bail, attempt) => {
//     try {
//       const payment = {
//         idempotencyKey: payload.idempotencyKey,
//         locationId: payload.locationId,
//         sourceId: payload.sourceId,
//         amountMoney: {
//           amount: '100',
//           currency: 'USD',
//         },
//       };

//       if (payload.customerId) {
//         payment.customerId = payload.customerId;
//       }
//       if (payload.verificationToken) {
//         payment.verificationToken = payload.verificationToken;
//       }

//       const { result, statusCode } =
//         await square.paymentsApi.createPayment(payment);


//       send(res, statusCode, {
//         success: true,
//         payment: {
//           id: result.payment.id,
//           status: result.payment.status,
//           receiptUrl: result.payment.receiptUrl,
//           orderId: result.payment.orderId,
//         },
//       });
//     } catch (ex) {
//       console.log(ex);
//     }
//   });
// }

// async function storeCard(req, res) {
//   const payload = await json(req);

//   if (!validateCreateCardPayload(payload)) {
//     throw createError(400, 'Bad Request');
//   }

//   await retry(async (bail, attempt) => {
//     try {
//       const cardReq = {
//         idempotencyKey: payload.idempotencyKey,
//         sourceId: payload.sourceId,
//         card: {
//           customerId: payload.customerId,
//         },
//       };

//       if (payload.verificationToken) {
//         cardReq.verificationToken = payload.verificationToken;
//       }

//       const { result, statusCode } = await square.cardsApi.createCard(cardReq);

//       // cast 64-bit values to string
//       // to prevent JSON serialization error during send method
//       result.card.expMonth = result.card.expMonth.toString();
//       result.card.expYear = result.card.expYear.toString();
//       result.card.version = result.card.version.toString();

//       send(res, statusCode, {
//         success: true,
//         card: result.card,
//       });
//     } catch (ex) {
//       if (ex instanceof ApiError) {
//         bail(ex);
//       } else {
//         throw ex; // to attempt retry
//       }
//     }
//   });
// }

// // serve static files like index.html and favicon.ico from public/ directory
// async function serveStatic(req, res) {
//   await staticHandler(req, res, {
//     public: 'public',
//   });
// }

// // export routes to be served by micro
// module.exports = router(
//   post('/payment', createPayment),
//   post('/card', storeCard),
//   get('/*', serveStatic),
// );
