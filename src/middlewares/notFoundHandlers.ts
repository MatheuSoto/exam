import boom from "@hapi/boom";
import { Request, Response } from "express";

const notFoundHandlers = (req: Request, res: Response) => {
  const {
    output: { statusCode, payload },
  } = boom.notFound();
  res.status(statusCode).json(payload);
};

export default notFoundHandlers;
