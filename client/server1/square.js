import { ApiError, Client, Environment } from "square";

const client = new Client({
  environment: Environment.Sandbox,
  accessToken:
    'EAAAl-gH4pdWdWCOKOj9r0WeyrmSCOVLDknPymmZNQqvCND_ax-3DdobWAFjIftO',
});

module.exports = { ApiError, client };
