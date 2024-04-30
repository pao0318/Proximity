const { config } = require('dotenv');

// package.json sets NODE_ENV in its scripts
const isProduction = process.env.NODE_ENV === 'production';

// load configuration based on environment
const { parsed } = config({
  path: '.env.sandbox',
});

// export secrets stored in .env.production or .env.sandbox (based on .env.example)
module.exports = {
  ...parsed,
  isProduction,
};
