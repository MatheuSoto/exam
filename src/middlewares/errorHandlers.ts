import config from "../config";
import boom, { Boom } from "@hapi/boom";
import { Request, Response, NextFunction } from "express";

interface ErrorWithStack extends Error {
  isBoom?: boolean;
  output?: {
    statusCode: number;
    payload: any;
  };
}

function withErrorStack(error: any, stack: string | undefined): any {
  if (config.dev) {
    return { ...error, stack };
  }
  return error;
}

function logErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  next(err);
}

function wrapErrors(
  err: ErrorWithStack,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  } else {
    next(err);
  }
}

function errorHandler(
  err: ErrorWithStack,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { output } = err;

  if (output) {
    const { statusCode, payload } = output;
    res.status(statusCode).json(withErrorStack(payload, err.stack));
  } else {
    res
      .status(500)
      .json(withErrorStack({ message: "Internal Server Error" }, err.stack));
  }
}

export { logErrors, wrapErrors, errorHandler };
