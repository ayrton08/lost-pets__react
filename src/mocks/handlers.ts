// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post(
    "https://lost-pets-production.up.railway.app/api/v1/users",
    (req, res, ctx) => {
      return res(ctx.json({ created: true }));
    }
  ),
];
