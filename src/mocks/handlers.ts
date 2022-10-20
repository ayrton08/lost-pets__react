// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post(
    "https://dwf-m7-postgre.herokuapp.com/api/v1/users",
    (req, res, ctx) => {
      return res(ctx.json({ created: true }));
    }
  ),
];
